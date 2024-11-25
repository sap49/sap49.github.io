import MD5 from "./md5";

export function validateInput(value, inputType) {
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    const inviteCodeRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/i;
    const nameRegex = /^[a-zA-Z\-\']+ [a-zA-Z\-\']+$/i;

    if (inputType === "Name") {
      return value && value.length > 0 && nameRegex.test(value);
    } else if (inputType === "Invite Code") {
        return value && value.length > 5 && inviteCodeRegex.test(value) && MD5(value) === process.env.REACT_APP_INVITE_CODE;
    }
}