import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';
import database from '../config/datasource';

const Users = database.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

},
  {
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.set('password', bcrypt.hashSync(user.password, salt));
      },
    }
  }
);

Users.isPassword = (password, encodedPassword) => bcrypt.compareSync(password, encodedPassword)

module.exports = Users;