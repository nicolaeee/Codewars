function validatePIN(pin) {
    const pinAsNumber = Number(pin);

    if (!isNaN(pinAsNumber) && Number.isInteger(pinAsNumber)) {
        if (pin.length === 4 || pin.length === 6) {
            return true;
        }
    }

    return false;
}