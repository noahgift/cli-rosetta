#!/usr/bin/env node
"use strict";

/*

Hyperledger Query Commandline Tool

./query-cli.js 
__dirname = path.resolve();
*/
const Hfc = require('fabric-client'),
    path = require('path'),
    chalk = require('chalk'),
    prettyjson = require('prettyjson'),
    program = require('commander'),
    options = {
        walletPath: path.join(__dirname, './network/creds'),
        userId: 'PeerAdmin',
        channelId: 'mychannel',
        chaincodeId: 'fabcar',
        networkUrl: 'grpc://localhost:7051'
    };
let channel = {},
    transactionId = null,
    client = null,
    jsonResult = null;
program
    .version('0.0.1')
    .option('-c, --car [value]', 'car to query')
    .parse(process.argv);

/**
 * Queries Blockchain 
 * @param {string} chaincodeFunc The chaincode function to query
 * @param {string} car The individual car to query
 * @returns {string} nothing
 */
function queryHelper (chaincodeFunc = 'queryAllCars', car = '') {

    Promise.resolve().then(() => {

        console.log(chalk.red("Create a client and set the wallet location"));
        client = new Hfc();

        return Hfc.newDefaultKeyValueStore({path: options.walletPath});

    })

    .then((wallet) => {

        console.log(chalk.red("Set wallet path, and associate user ",
            options.userId, " with application"));
        client.setStateStore(wallet);

        return client.getUserContext(options.userId, true);

    })

    .then((user) => {

        console.log(
        chalk.red(
            "Check user is enrolled, and set a query URL in the network"
            ));
        if (typeof user === "undefined" || user.isEnrolled() === false) {

            console.error("User not defined, or not enrolled - error");

        }
        channel = client.newChannel(options.channelId);
        channel.addPeer(client.newPeer(options.networkUrl));

    })
    .then(() => {

        console.log(chalk.red("Make query"));
        transactionId = client.newTransactionID();
        console.log(chalk.red("Assigning transaction_id: "),
            chalk.green(transactionId._transaction_id));

        // The queryCar - requires 1 argument, ex: args: ['CAR4'],
        // The queryAllCars - requires no arguments , ex: args: [''],
        const request = {
            chaincodeId: options.chaincodeId,
            txId: transactionId,
            fcn: chaincodeFunc,
            args: [car]
        };

        return channel.queryByChaincode(request);

    })
    .then((queryResponses) => {

        console.log(chalk.red("returned from query"));
        if (typeof queryResponses.length === 'undefined') {

            console.log("No payloads were returned from query");

        } else {

            console.log(
                chalk.bgBlue("Query result count = ", queryResponses.length));

        }
        if (queryResponses[0] instanceof Error) {

            console.error("error from query = ", queryResponses[0]);

        }
        jsonResult = JSON.parse(queryResponses[0].toString());
        console.log(prettyjson.render(jsonResult, {
            keysColor: 'yellow',
            dashColor: 'blue',
            stringColor: 'white'
        }));

    })
    .catch((err) => {

        console.error("Caught Error", err);

    });

}
// Run The Command line Tool
if (typeof program.car === 'undefined') {

    queryHelper('queryAllCars');

} else {

    queryHelper('queryCar', program.car);

}