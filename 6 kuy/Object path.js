function find(object, path) {
    const keys = path.split('.');
    let value = object;

    for (let i = 0; i < keys.length; i++) {
      if (value == null) return undefined;
      value = value[keys[i]];
    }

    return value;
  }
