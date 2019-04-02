import test from 'ava'
import convertFile from 'convert/file'

test('pre request', async t => {
  const { main } = await convertFile('test/material/2/pre-request.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "TestRequest",
    method: "GET",
    address: "http://example.com",
    pre() {
      pm.variables.set("test", "a");
      pm.variables.set("test2", "b");
      pm.variables.set("test3", "c");
    }
  });
}
`)
})

test('pre collection', async t => {
  const { main } = await convertFile('test/material/2/pre-collection.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4 };

const Pre = Symbol.for("pre");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Pre].push(() => {
    pm.variables.set("test", "a");
    pm.variables.set("test2", "b");
    pm.variables.set("test3", "c");
  });

  postman[Request]({
    name: "TestRequest",
    method: "GET",
    address: "http://example.com"
  });

  postman[Pre].pop();
}
`)
})

test('pre folder', async t => {
  const { main } = await convertFile('test/material/2/pre-folder.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Pre = Symbol.for("pre");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  group("TestFolder", function() {
    postman[Pre].push(() => {
      pm.variables.set("test", "a");
      pm.variables.set("test2", "b");
      pm.variables.set("test3", "c");
    });

    postman[Request]({
      name: "TestRequest",
      method: "GET",
      address: "http://example.com"
    });

    postman[Pre].pop();
  });
}
`)
})

test('pre nested', async t => {
  const { main } = await convertFile('test/material/2/pre-nested.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Pre = Symbol.for("pre");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  group("TestFolder", function() {
    postman[Pre].push(() => {
      pm.variables.set("test", "a");
    });

    group("TestFolder2", function() {
      postman[Pre].push(() => {
        pm.variables.set("test2", "b");
      });

      group("TestFolder3", function() {
        postman[Pre].push(() => {
          pm.variables.set("test3", "c");
        });

        postman[Request]({
          name: "TestRequest",
          method: "GET",
          address: "http://example.com"
        });

        postman[Pre].pop();
      });

      postman[Pre].pop();
    });

    postman[Pre].pop();
  });
}
`)
})

test('post request', async t => {
  const { main } = await convertFile('test/material/2/post-request.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "TestRequest",
    method: "GET",
    address: "http://example.com",
    post(response) {
      pm.variables.set("test", "a");
      pm.variables.set("test", "b");
      pm.variables.set("test", "c");
    }
  });
}
`)
})

test('post collection', async t => {
  const { main } = await convertFile('test/material/2/post-collection.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";

export let options = { maxRedirects: 4 };

const Post = Symbol.for("post");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Post].push(() => {
    pm.variables.set("test", "a");
    pm.variables.set("test", "b");
    pm.variables.set("test", "c");
  });

  postman[Request]({
    name: "TestRequest",
    method: "GET",
    address: "http://example.com"
  });

  postman[Post].pop();
}
`)
})

test('post folder', async t => {
  const { main } = await convertFile('test/material/2/post-folder.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Post = Symbol.for("post");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  group("TestFolder", function() {
    postman[Post].push(() => {
      pm.variables.set("test", "a");
      pm.variables.set("test", "b");
      pm.variables.set("test", "c");
    });

    postman[Request]({
      name: "TestRequest",
      method: "GET",
      address: "http://example.com"
    });

    postman[Post].pop();
  });
}
`)
})

test('post nested', async t => {
  const { main } = await convertFile('test/material/2/post-nested.json')
  t.is(main, `// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Post = Symbol.for("post");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  group("TestFolder", function() {
    postman[Post].push(() => {
      pm.variables.set("test", "a");
    });

    group("TestFolder2", function() {
      postman[Post].push(() => {
        pm.variables.set("test", "b");
      });

      group("TestFolder3", function() {
        postman[Post].push(() => {
          pm.variables.set("test", "c");
        });

        postman[Request]({
          name: "TestRequest",
          method: "GET",
          address: "http://example.com"
        });

        postman[Post].pop();
      });

      postman[Post].pop();
    });

    postman[Post].pop();
  });
}
`)
})
