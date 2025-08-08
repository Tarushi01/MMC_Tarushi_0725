from userdetails import add_new_user;

def view_account_details(user):
        print(f"Account Number: {user['accountNumber']}")
        print(f"Username: {user['username']}")
        print(f"Name: {user['name']} {user['lastName']}")
        print(f"Balance: ₹{user['availableBalance']}")

def check_balance(user):
        print(f"Available Balance: ₹{user['availableBalance']}")

def withdraw(user):
        amount = float(input("Enter amount to withdraw: ₹"))
        if amount <= 0:
            print("Invalid amount.")
            return
        if amount <= user["availableBalance"]:
            user["availableBalance"] -= amount
            save_user(user["accountNumber"], user)
            print("Withdrawal successful!")
        else:
            print("Insufficient balance.")

def deposit(user):
        amount = float(input("Enter amount to deposit: ₹"))
        if amount <= 0:
            print("Invalid amount.")
            return
        user["availableBalance"] += amount
        save_user(user["accountNumber"], user)
        print("Deposit successful!")

def transfer(user):
        target_acc = input("Enter target account number: ")
        target_user = load_user(target_acc)
        if target_user is None:
            print("Target account not found.")
            return
        amount = float(input("Enter amount to transfer: ₹"))
        if amount <= 0 or amount > user["availableBalance"]:
            print("Invalid transfer amount.")
            return
        user["availableBalance"] -= amount
        target_user["availableBalance"] += amount
        save_user(user["accountNumber"], user)
        save_user(target_user["accountNumber"], target_user)
        print("Transfer successful!")

def change_pin(user):
        old_pin = input("Enter current PIN: ")
        if old_pin != user["PIN"]:
            print("Incorrect PIN.")
            return
        new_pin = input("Enter new PIN: ")
        if len(new_pin) < 4 or not new_pin.isdigit():
            print("Invalid PIN format.")
            return
        user["PIN"] = new_pin
        save_user(user["accountNumber"], user)
        print("PIN changed successfully.")


print("--------Welcome to City Bank--------")
print('a. admin')
print('b. user')
usertype = input("Please enter a or b: ")

if usertype == 'a':
        print("Welcome Admin")
        adminUsername = input("Username: ")
        adminPassword = input("Password: ")
        adminSecretCode = input("Secret Code: ")
        if adminUsername == 'admin' and adminPassword == 'Nikhil@1234' and adminSecretCode == '1234':
            print('Login successful')
            while True:
                print("1. Add new user")
                print("2. Exit")
                choice = input("Enter your choice: ")
                if choice == '1':
                    add_new_user()
                elif choice == '2':
                    print("Logged out from Admin.")
                    break
                else:
                    print("Invalid choice.")
        else:
            print( 'Login failed.')

elif usertype == 'b':
        print('Welcome User')
        useraccountnumber = input('Account Number: ')
        user_username = input('Username: ')
        userpassword = input('Password: ')
        user = load_user(useraccountnumber)
        if user and user["username"] == user_username and user["password"] == userpassword:
            print("Login successful")
            while True:
                print("\n1. View Account Details")
                print("2. Check Balance")
                print("3. Withdraw")
                print("4. Deposit")
                print("5. Transfer")
                print("6. Change PIN")
                print("7. Exit")

                choice = input("Enter your choice (1-7): ")

                if choice == '1':
                    view_account_details(user)
                elif choice == '2':
                    check_balance(user)
                elif choice == '3':
                    withdraw(user)
                elif choice == '4':
                    deposit(user)
                elif choice == '5':
                    transfer(user)
                elif choice == '6':
                    change_pin(user)
                elif choice == '7':
                    print("Thank you for banking with us!")
                    break
                else:
                    print("Invalid selection. Please choose between 1 to 7.")
        else:
            print("Login failed.")
else:
    print("Please select a or b.")
