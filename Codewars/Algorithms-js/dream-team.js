function createDreamTeam(members) {
    if (!Array.isArray(members)) {
      return false;
    }

    const team = members.filter((member) => typeof member === "string").map((member) => member.trim()[0].toUpperCase())
      .sort((a, b) => a.localeCompare(b));
    return team.join('');
  }