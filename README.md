# EthereumGuard-I 
Ethereum address fraud detection application

When we want to send some ethers to an address we would want to know whether the address is a genuine address or fraudualent one which helps users to stay secured from scams this application provides us with the information of being fraudalent or genuine based on a list of parameters like ERC20 tokens , no.of transaction , min transactions , avg transactions... so on.

# Built-With 
- Nextjs
+ Nodejs
- Flask
+ LSTM
- Etherjs

# Collab Link:
```
 LSTM : https://colab.research.google.com/drive/1ubQdNhkUhmJOszrW1iJu9lL8UOh95iPk?usp=sharing
```
```
XGBOOST : https://colab.research.google.com/drive/1bSP5fBCoTuN6Zrp6SAMaHxcHMAAUceSC#scrollTo=Lhu5iBTDOXa0
```

# Installation
Below are the step by step instructions to pull the repository and run it in your system locally:
  
  1. Clone the repository into your local drive
  ```
  git clone https://github.com/Eashwarsai/EthereumGuard-I.git
  ```
  2.Move to cloned directly and Install Node modules
  ```
  npm install
  ```
  3.Start your nextjs application
  ```
  npm run dev
  ```
  4.Move to server
  ```
  cd server
  ```
  5.Install python and pip (ignore if exists)
  
  6.Install numpy
  ```
  pip install numpy
  ```
   7.Install flask
  ```
  pip install flask
  ```
  8.Install joblib
  ```
  pip install joblib
  ```
  9.Install pandas
  ```
  pip install pandas
  ```
  10.Install flask_cors
  ```
  pip install flask_cors
  ```
  11.Install imblearn
  ```
  pip install imblearn
  ```
  12.Install xgboost
  ```
  pip install xgboost
  ```
  13. Start the server
  ```
  python app.py
  ```
# Setup Firebase

create firebase app by selecting add project give a name give default account for firebase then your project will be created now click on continue select authentication and move to signin method and select email and passowrd as the selected method(enable the top toggle) select poject overview you can see  </> symbol right below projectname select </> give some name tick checkbox and select register you will see add firebase sdk with a firebaseConfig defined copy the variable and replace it with the one in config/firebase.ts click on continue till end .

if firebase setup results in any errors use 
```
npm i firebase@9.2
```
# Upcoming implementations
- [ ] Wanted to extract parameters from etherscan inorder have universal appeal.
- [ ] Add a flag button to the UI to allow users to report addresses.
- [ ] Try to get ip address of the system from which transaction is done if an address is really detected as fraud and black list it .

# Contact 
  > EashwarSai  - @eashwarsaiboini@gmail.com

 All suggestions are welcomed , intrested can mail to above mail id

# Demo Video
https://user-images.githubusercontent.com/119802849/235765296-cc7a5e32-078a-4c07-9919-950b6a68d093.mp4

# Walkthrough

