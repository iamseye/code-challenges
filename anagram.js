/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

  if (!s || !p || !s.length || !p.length || s.length < p.length) {
    return [];
  }

  if (s === p) {
    return [0];
  }

  const ana_pattern = p;
  const source = s;

  const p_dictionary = {};
  let window = ana_pattern.length;

  for (const c of ana_pattern) {
      p_dictionary[c] = (p_dictionary[c] || 0) + 1;
  }


  const result = [];

  for (let j = 0; j <= source.length - window; ++j) {
      const mapping = {};
      for (let i = j; i < window; i += 1) {
         mapping[source[i]] = (mapping[source[i]] || 0) + 1;
      }
      let match = true;
      for (const [key, value] of Object.entries(mapping)) {
        if (!(key in p_dictionary) || p_dictionary[key] !== value) {
            match = false;
            break;
        }
      }
      if (match) {
        result.push(j);
      }
  }


  console.log(result);

};

findAnagrams("cbaebabacd", "abc");


// solution 2
var findAnagrams2 = function(s, p) {
    if(!s || !p || !s.length || !p.length || s.length < p.length) {
        return [];
    }
    const result = [];
    const chars_count = 26;
    const p_map = Array(chars_count).fill(0);
    const s_map = Array(chars_count).fill(0);
    const base = 'a'.charCodeAt(0);

    let l = p.length;
    while (--l >= 0) {
        p_map[p.charCodeAt(l) - base]++;
    }

    for (let i = 0; i < s.length ; i++) {
        s_map[s.charCodeAt(i) - base]++;

        if (i >= p.length) {
            s_map[s.charCodeAt(i - p.length) - base]--;
        }

        let match = true;

        // for (let j = 0; j < chars_count; j++) {
            if (s_map !== p_map) {
                match = false;
                break;
            }
        // }

        if (match) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
