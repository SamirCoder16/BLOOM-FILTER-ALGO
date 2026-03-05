<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

  <h1>🌸 Bloom Filter Algorithm</h1>
  <p>
    A <strong>Bloom Filter</strong> is a <span class="tag">space-efficient</span> probabilistic data structure used to test whether an element is a member of a set.
    It can say an item is <strong>definitely not</strong> in the set, or <strong>might be</strong> in the set — with some false positives possible.
  </p>

  <hr />

  <h2>📌 What is a Bloom Filter?</h2>
  <ul>
    <li>Bit array of <code>m</code> bits, all set to 0</li>
    <li>Uses <code>k</code> different hash functions</li>
    <li>Cannot remove elements (in standard form)</li>
    <li>Useful when memory and speed are critical</li>
  </ul>

  <div class="highlight">
    ✅ Can tell: Element <strong>might be present</strong><br>
    ❌ Can’t tell: If element <strong>is definitely present</strong><br>
    🚫 Never says: Element is present when it’s not (no false negatives)<br>
    ⚠️ May say: Element is present when it’s not (false positives possible)
  </div>

  <h2>🔧 How it Works</h2>

  <h3>🔹 Adding an Element</h3>
  <ol>
    <li>Apply <code>k</code> hash functions to the element</li>
    <li>Set the bits at those positions in the bit array to <code>1</code></li>
  </ol>

  <h3>🔹 Querying an Element</h3>
  <ol>
    <li>Apply the same <code>k</code> hash functions</li>
    <li>Check if all <code>k</code> bits are <code>1</code></li>
    <li>If yes → might be in the set. If no → definitely not in the set</li>
  </ol>

  <h2>📘 Use Cases</h2>

  <table>
    <thead>
      <tr>
        <th>Use Case</th>
        <th>Benefit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Web Caching</td>
        <td>Avoid redundant fetches</td>
      </tr>
      <tr>
        <td>Spell Checkers</td>
        <td>Quick dictionary lookup</td>
      </tr>
      <tr>
        <td>Databases</td>
        <td>Efficient index filtering</td>
      </tr>
      <tr>
        <td>Email Spam Filters</td>
        <td>Detect repeated spam mails</td>
      </tr>
      <tr>
        <td>Network Routers</td>
        <td>Efficient routing and caching</td>
      </tr>
    </tbody>
  </table>

  <h2>💻 Example Code (JavaScript)</h2>
  <pre><code class="language-js">
class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.bitArray = new Array(size).fill(0);
  }

  _hash(str, seed) {
    let hash = 0;
    for (let i = 0; i &lt; str.length; i++) {
      hash = (hash * seed + str.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  add(item) {
    const hash1 = this._hash(item, 17);
    const hash2 = this._hash(item, 31);
    this.bitArray[hash1] = 1;
    this.bitArray[hash2] = 1;
  }

  contains(item) {
    const hash1 = this._hash(item, 17);
    const hash2 = this._hash(item, 31);
    return this.bitArray[hash1] === 1 &amp;&amp; this.bitArray[hash2] === 1;
  }
}
  </code></pre>

  <h2>📉 Pros and Cons</h2>

  <table>
    <thead>
      <tr>
        <th>Pros</th>
        <th>Cons</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Super memory efficient</td>
        <td>May give false positives</td>
      </tr>
      <tr>
        <td>Fast insert and lookup</td>
        <td>Cannot delete elements</td>
      </tr>
      <tr>
        <td>No need to store full data</td>
        <td>No actual data recovery</td>
      </tr>
    </tbody>
  </table>

  <h2>📁 Project Structure</h2>
  <pre><code>
bloom-filter/
│
├── src/
│   ├── BloomFilter.js
│   └── hashFunctions.js
├── test/
│   └── BloomFilter.test.js
├── README.html
├── package.json
└── LICENSE
  </code></pre>

  <h2>👨‍💻 Author</h2>
  <p>
    <strong>Samir Parvez</strong><br />
    📍 Kolkata, India<br />
    📧 samirparvez48@gmail.com
  </p>
  
  <h2>🌟 Star this Project</h2>
  <p>If you found this helpful, don’t forget to ⭐️ the repo!</p>

</body>
</html>
