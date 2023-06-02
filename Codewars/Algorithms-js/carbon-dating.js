function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(sampleActivity) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
      return false;
    }

    const k = 0.693 / HALF_LIFE_PERIOD;
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);

    return age;
  }