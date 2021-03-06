const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidArray = emails
    .split(',')
      .map(email => email.trim())
        .filter(email => regex.test(email) === false);
  if (invalidArray.length) {
    return `Invalid emails found: ${invalidArray}`;
  } else {
    return null;
  }
};
