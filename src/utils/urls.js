const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace('à', 'a')
    .replace('è', 'e')
    .replace('é', 'e')
    .replace('ì', 'i')
    .replace('ò', 'o')
    .replace('ù', 'u')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

module.exports.slugify = slugify  