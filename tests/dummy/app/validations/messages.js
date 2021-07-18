export default {
  inclusion: '[CUSTOM] {description} is not included in the list',
  exclusion: '[CUSTOM] {description} is reserved',
  invalid: '[CUSTOM] {description} is invalid',
  confirmation: "[CUSTOM] {description} doesn't match {on}",
  accepted: '[CUSTOM] {description} must be accepted',
  empty: "[CUSTOM] {description} can't be empty",
  blank: '[CUSTOM] {description} must be blank',
  present: "[CUSTOM] {description} can't be blank",
  collection: '[CUSTOM] {description} must be a collection',
  singular: "[CUSTOM] {description} can't be a collection",
  tooLong: '[CUSTOM] {description} is too long (maximum is {max} characters)',
  tooShort: '[CUSTOM] {description} is too short (minimum is {min} characters)',
  between: '[CUSTOM] {description} must be between {min} and {max} characters',
  before: '[CUSTOM] {description} must be before {before}',
  onOrBefore: '[CUSTOM] {description} must be on or before {onOrBefore}',
  after: '[CUSTOM] {description} must be after {after}',
  onOrAfter: '[CUSTOM] {description} must be on or after {onOrAfter}',
  wrongDateFormat: '[CUSTOM] {description} must be in the format of {format}',
  wrongLength:
    '[CUSTOM] {description} is the wrong length (should be {is} characters)',
  notANumber: '[CUSTOM] {description} must be a number',
  notAnInteger: '[CUSTOM] {description} must be an integer',
  greaterThan: '[CUSTOM] {description} must be greater than {gt}',
  greaterThanOrEqualTo:
    '[CUSTOM] {description} must be greater than or equal to {gte}',
  equalTo: '[CUSTOM] {description} must be equal to {is}',
  lessThan: '[CUSTOM] {description} must be less than {lt}',
  lessThanOrEqualTo:
    '[CUSTOM] {description} must be less than or equal to {lte}',
  otherThan: '[CUSTOM] {description} must be other than {value}',
  odd: '[CUSTOM] {description} must be odd',
  even: '[CUSTOM] {description} must be even',
  positive: '[CUSTOM] {description} must be positive',
  date: '[CUSTOM] {description} must be a valid date',
  email: '[CUSTOM] {description} must be a valid email address',
  phone: '[CUSTOM] {description} must be a valid phone number',
  url: '[CUSTOM] {description} must be a valid url',
  custom: '[CUSTOM] This is a custom message',
};
