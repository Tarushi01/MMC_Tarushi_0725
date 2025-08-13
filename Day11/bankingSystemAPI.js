const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3001;

// List of 10 accounts
let accounts = [
  { accNo: 1001, accName: "Riya", accType: "Savings", accBalance: 5000, accIsActive: true },
  { accNo: 1002, accName: "Apurva", accType: "Current", accBalance: 12000, accIsActive: true },
  { accNo: 1003, accName: "Tarushi", accType: "Savings", accBalance: 8000, accIsActive: false },
  { accNo: 1004, accName: "Pooja", accType: "Current", accBalance: 15000, accIsActive: true },
  { accNo: 1005, accName: "Eva", accType: "Savings", accBalance: 4000, accIsActive: false },
  { accNo: 1006, accName: "Leena", accType: "Current", accBalance: 10000, accIsActive: true },
  { accNo: 1007, accName: "Shreya", accType: "Savings", accBalance: 7000, accIsActive: true },
  { accNo: 1008, accName: "Haley", accType: "Current", accBalance: 9000, accIsActive: false },
  { accNo: 1009, accName: "Ivy", accType: "Savings", accBalance: 6000, accIsActive: true },
  { accNo: 1010, accName: "Alia", accType: "Current", accBalance: 11000, accIsActive: false }
];

// a. Get
app.get('/accounts', (req, res) => {
  res.json(accounts);
});

// b. Get account by accNo
app.get('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) return res.status(404).json({ message: "Account not found" });
  res.json(account);
});

// c. Get all inactive accounts
app.get('/accounts/inactive', (req, res) => {
  const inactive = accounts.filter(acc => !acc.accIsActive);
  res.json(inactive);
});

// d. Get accounts summary
app.get('/accounts/summary', (req, res) => {
  let totalAccounts = 0;
  let totalBalance = 0;
  let totalActive = 0;
  let totalInactive = 0;
  let totalSavings = 0;
  let totalCurrent = 0;

  for (let i = 0; i < accounts.length; i++) {
    const acc = accounts[i];
    totalAccounts++;

    // Aggregate balance using accNo (account ID)
    if (typeof acc.accNo === 'number') {
      totalBalance += acc.accBalance;
    }

    // Count active/inactive
    if (acc.accIsActive) {
      totalActive++;
    } else {
      totalInactive++;
    }

    // Count account types
    if (acc.accType === "Savings") {
      totalSavings++;
    } else if (acc.accType === "Current") {
      totalCurrent++;
    }
  }

  res.json({
    TotalAccounts: totalAccounts,
    TotalBalance: totalBalance,
    TotalActive: totalActive,
    TotalInactive: totalInactive,
    TotalSavings: totalSavings,
    TotalCurrent: totalCurrent
  });
});


// f. Delete all inactive accounts
app.delete('/accounts/inactive', (req, res) => {
  // Find accounts that will be deleted
  const deletedAccounts = accounts.filter(acc => !acc.accIsActive);

  // Remove inactive accounts from the main list
  accounts = accounts.filter(acc => acc.accIsActive);

  res.json({
    message: "Inactive accounts deleted",
    deletedCount: deletedAccounts.length,
    deletedAccounts: deletedAccounts
  });
});


// e. Delete account by accNo
app.delete('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const index = accounts.findIndex(acc => acc.accNo === accNo);
  if (index === -1) return res.status(404).json({ message: "Account not found" });

  const deleted = accounts.splice(index, 1);
  res.json({ message: "Account deleted", account: deleted[0] });
});


// g. Add a new account
app.post('/accounts', (req, res) => {
  const { accNo, accName, accType, accBalance, accIsActive } = req.body;

  
  if (accounts.some(acc => acc.accNo === accNo)) {
    return res.status(400).json({ message: "Account number already exists" });
  }

  const newAccount = { accNo, accName, accType, accBalance, accIsActive };
  accounts.push(newAccount);
  res.status(201).json({ message: "Account created", account: newAccount });
});

// h. Update balance of an account holder by accNo
app.put('/accounts/:accNo/balance', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const { accBalance } = req.body;

  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) return res.status(404).json({ message: "Account not found" });

  account.accBalance = accBalance;
  res.json({ message: "Balance updated", account });
});


app.listen(PORT, () => {
  console.log(`Banking System API running at http://localhost:${PORT}`);
});
