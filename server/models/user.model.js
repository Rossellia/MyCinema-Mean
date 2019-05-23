const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'First name can\'t be empty'
},
lastName: {
  type: String,
  required: 'Last name can\'t be empty'
},
    userName: {
        type: String,
        required: 'Username can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    confirmPassword: {
      type: String,
      required: 'Confirmed Password can\'t be empty',
      minlength : [4,'Password must be atleast 4 character long']
  },
    saltSecret: String
});
// Custom validation for email
adminSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
adminSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.confirmPassword = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
adminSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

adminSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('Admin', adminSchema);



var adminMovieSchema = new mongoose.Schema({
    movieName: { 
        type: String,  
        required: 'Movie name can\'t be empty' },
    movieDescription: {
        type: String
      },
    moviePrice:{
        type: Number,
        required: 'Price can\'t be empty'
    },
    movieGenre:{
        type: String
    },
    movieDuration:{
        type: String,
        required: 'Movie duration can\'t be empty'
    },
    movieImage: {
        type: String
    }
});
mongoose.model('AdminMovie', adminMovieSchema);


var userSchema = new mongoose.Schema({
    username: {
          type: String,
          required: 'Username can\'t be empty',
          unique:true
      }, 
    password: {
          type: String,
          required: 'Password can\'t be empty',
          minlength : [8,'Password must be at least 8 character long']
      },
    confirmPassword: {
          type: String,
          required: 'Password can\'t be empty',
          minlength : [8,'Password must be at least 8 character long']
      },
    saltSecret: String,
    profilePicture: { 
          type: String,
           default: "poza.jpg" },
    firstName: {
      type: String,
      required: 'First name can\'t be empty'
  },
    lastName: {
    type: String,
    required: 'Last name can\'t be empty'
  },
      
    email: {
          type: String,
          required: 'Email can\'t be empty',
          unique: true
      }, 
    phoneNumber: { 
          type: String, 
          default: "null"},
    birthday: { 
              type: String,
               default: "null"},
               
      
     
  });
  // Custom validation for email
  userSchema.path('email').validate((val) => {
      emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
  }, 'Invalid e-mail.');
  
  // Events
  userSchema.pre('save', function (next) {
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(this.password, salt, (err, hash) => {
              this.password = hash;
              this.saltSecret = salt;
              next();
          });
      });
  });
  userSchema.pre('save', function (next) {
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(this.confirmPassword, salt, (err, hash) => {
              this.confirmPassword = hash;
              this.saltSecret = salt;
              next();
          });
      });
  });
  
  // Methods
  userSchema.methods.verifyPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
  };
  
  
  
  userSchema.methods.generateJwt = function () {
      return jwt.sign({ _id: this._id},
          process.env.JWT_SECRET,
      {
          expiresIn: process.env.JWT_EXP
      });
  }
  
  mongoose.model('User', userSchema);

  var programSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: 'Movie name can\'t be empty'
    },
    room:{
        type:String,
           required: 'Room name can\'t be empty'
    },
    date:{
         type: String,
        required: 'Date can\'t be empty'       
    },
    hour: {
        type: String,
        required: 'Hour can\'t be empty'
        
        
    },
  
});

mongoose.model('Program', programSchema);