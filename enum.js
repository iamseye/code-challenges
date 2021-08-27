
const provinces = ["1","2","3","4"];

const CHUNK = 3;
for (let i = 0, l = provinces.length; i < l; i += CHUNK) {
    const provinces_slice = provinces.slice(i, i + CHUNK);
    console.log(provinces_slice);
}