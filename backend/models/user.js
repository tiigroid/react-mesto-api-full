const mongoose = require('mongoose');
const validator = require('validator');
const { urlPattern } = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Жак-Ив Кускот',
    },
    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Исследователь поддивана',
    },
    avatar: {
      type: String,
      default: 'https://funart.pro/uploads/posts/2021-11/1638235420_40-funart-pro-p-milii-kotik-v-shapochke-zhivotnie-krasivo-44.jpg',
      validate: {
        validator(v) {
          return urlPattern.test(v);
        },
        message: 'Некорректный URL',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator(v) {
          return validator.isEmail(v);
        },
        message: 'Некорректный email',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('user', userSchema);
