    # userdetails.py

def load_user(accountNumber):
        try:
            with open("usersdetails.txt", "r") as file:
                for line in file:
                    data = line.strip().split(",")
                    if data[0] == accountNumber:
                        return {
                            "accountNumber": data[0],
                            "username": data[1],
                            "password": data[2],
                            "name": data[3],
                            "lastName": data[4],
                            "availableBalance": float(data[5]),
                            "PIN": data[6]
                        }
        except FileNotFoundError:
            print(" User database not found.")
        return None

def save_user(accountNumber, updated_user):
        lines = []
        found = False
        try:
            with open("usersdetails.txt", "r") as file:
                for line in file:
                    data = line.strip().split(",")
                    if data[0] == accountNumber:
                        new_line = f"{updated_user['accountNumber']},{updated_user['username']},{updated_user['password']},{updated_user['name']},{updated_user['lastName']},{updated_user['availableBalance']},{updated_user['PIN']}"
                        lines.append(new_line)
                        found = True
                    else:
                        lines.append(line.strip())
        except FileNotFoundError:
            pass  # If file doesn't exist, we'll just create it anew

        if not found:
            # If user wasn't found, add new entry
            new_line = f"{updated_user['accountNumber']},{updated_user['username']},{updated_user['password']},{updated_user['name']},{updated_user['lastName']},{updated_user['availableBalance']},{updated_user['PIN']}"
            lines.append(new_line)

        with open("usersdetails.txt", "w") as file:
            for line in lines:
                file.write(line + "\n")

def add_new_user():
        print('Add New User Account')
        
        

        username = input("Choose a Username: ")
        password = input("Set a Password: ")
        name = input("Enter First Name: ")
        lastName = input("Enter Last Name: ")
with open("autonumber.txt", "r") as file:
        numberfrom_file = file.read();
        print(numberfrom_file);

        numberfrom_file = numberfrom_file + 1;
        accountNumber = numberfrom_file;
with open("autonumber.txt", "w") as f:
        f.write(numberfrom_file)

        try:
            initialDeposit = float(input("Initial Deposit Amount: ₹"))
            if initialDeposit < 0:
                print("Deposit amount must be positive.")
                return
        except ValueError:
            print("Invalid deposit amount.")
            return

        pin = input("Set a 4-digit PIN: ")
        if len(pin) != 4 or not pin.isdigit():
            print("PIN must be 4 digits.")
            return

with open(str(accountNumber) + ".txt", "a") as file:
     file.write(f"{accountNumber},{username},{password},{name},{lastName},{initialDeposit},{pin}\n")
     print("User created successfully.")

if __name__ == "__main__":
    add_new_user()

