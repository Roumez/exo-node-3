const _add = (nb1, nb2) => {
  return nb1 + nb2
}
const _sub = (nb1, nb2) => {
  return nb1 - nb2
}
const _mul = (nb1, nb2) => {
  return nb1 * nb2
}
const _div = (nb1, nb2) => {
  return nb1 / nb2
}
const _mod = (nb1, nb2) => {
  return nb1 % nb2
}

const calc = (opp, nb1, nb2) => {
  if (isNaN(nb1)) {
    return `ERREUR : "${nb1}" n'est pas un nombre.`
  } else if (isNaN(nb2)) {
    return `ERREUR : "${nb2}" n'est pas un nombre.`
  }
  nb1 = Number(nb1)
  nb2 = Number(nb2)
  switch (opp) {
    case 'add':
      return _add(nb1, nb2)
    case 'sub':
      return _sub(nb1, nb2)
    case 'mul':
      return _mul(nb1, nb2)
    case 'div':
      return _div(nb1, nb2)
    case 'mod':
      return _mod(nb1, nb2)
    default:
      return `ERREUR : L'opérateur "${opp}" n'existe pas. Essayer : add/sub/mul/div/mod`
  }
}

exports.calc = calc