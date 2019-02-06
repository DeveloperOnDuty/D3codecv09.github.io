(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'ngAnimate', 'vAccordion' ])

    .controller('MainController', function ($scope) {

      $scope.panesA = [
        {
          id: 'pane-1a',
          header: 'What is an ERC20 Token ?',
          content: 'ERC20 is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum network.For example, EOS is a type of ERC20 token. Both ERC20 tokens and Ethereum share the same blockchain network.',
          isExpanded: true
        },
        {
          id: 'pane-2a',
          header: 'How many confirmations ERC20 transactions need ?',
          content: 'More than 30 block confirmations are needed to confirm the transaction.'
        },
        {
          id: 'pane-3a',
          header: 'Where do I check my ERC20 transaction ?',
          content: 'ERC20 token transactions can be checked at etherscan.io/tx/',

        },
        {
          id: 'pane-4a',
          header: 'Is Ether safe/secure ?',
          content: 'Although Ethereum has yet to have any major security flaws discovered, Ethereum is a young project, and loss of funds is a risk with the use of the Ethereum network in general. The Ethereum Foundation legal agreement lists a number of these risks.',

        },
        {
          id: 'pane-3a',
          header: 'Other companies using Ethereum?',
          content: 'In November 2015, Microsoft and ConsenSys announced the addition of Ethereum Blockchain as a Service (EBaaS). Read more about the partnership and the differences between Bitcoin and Ethereum.',

        }
      ];

      $scope.panesB = [
        {id: 'pane-1b',
          header: 'What is Ether ?',
          content: 'Ether (ETH) is the primary currency on the Ethereum network. Much like Bitcoin (BTC), it is created by computerized mining. ETH can be sent from one address on the Ethereum network to another, and can also be used in other transactions called "smart contracts.’’',
          
          isExpanded: true
        },
        {
            id: 'pane-2b',
          header: 'What is a "smart contract" ?',
          content: 'A smart contract is an executable program stored on the Ethereum blockchain. The execution of a smart contract is processed by miners, and requires a payment of ether in order to fund the processing of the contract. One or more parties can create or fund a smart contract, which will execute according to the inputs it receives.',
        },
        {
          id: 'pane-3b',
          header: 'Can I send Bitcoin to an Ether wallet ?',
          content: 'No. Bitcoin and Ethereum are separate protocols.',

 
        }
      ];

      $scope.expandCallback = function (index, id) {
        console.log('expand:', index, id);
      };

      $scope.collapseCallback = function (index, id) {
        console.log('collapse:', index, id);
      };

      $scope.$on('accordionA:onReady', function () {
        console.log('accordionA is ready!');
      });

    });

})(angular);
