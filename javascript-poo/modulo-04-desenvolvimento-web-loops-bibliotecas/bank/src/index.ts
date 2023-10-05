import { Bank } from "./entities/Bank";

const bank = new Bank({
  accountNumber: 1254,
  accountBalance: 1000,
  accountType: "salary account",
  accountAgency: 2354,
});

console.log(`
BANK

Account Number: ${bank.getAccountNumber()}
Acount Balance: ${bank.getBalance()}`);

console.log("\nDeposit (300)");
bank.deposit(300);

console.log(`Acount Balance: ${bank.getBalance()}`);

console.log("\nWithdraw (200)");
bank.withdraw(200);

console.log(`Acount Balance: ${bank.getBalance()}`);