interface IBankProps {
  accountNumber: number;
  accountBalance: number;
  accountType: string;
  accountAgency: number;
}

export class Bank {
  private _bankProps: IBankProps;

  constructor(bankProps: IBankProps) {
    this._bankProps = bankProps;
  }

  getBalance(): number {
    return this._bankProps.accountBalance;
  }

  deposit(amount: number): void {
    this._bankProps.accountBalance += amount;
  }

  withdraw(amount: number): void {
    if (this._bankProps.accountBalance >= amount) {
      this._bankProps.accountBalance -= amount;
    } else {
      console.log("The account does not have sufficient balance");
    }
  }

  getAccountNumber(): number {
    return this._bankProps.accountNumber;
  }
}