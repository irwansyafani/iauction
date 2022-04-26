# iAuction

![npm](https://img.shields.io/npm/v/iauction?color=green)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/irwansyafani/iauction)

Helps you watch your countdown

## Installation

Using NPM:

```vim
npm install iauction
```

Using Yarn:

```vim
yarn add iauction
```

## Usage

```js
// basic
const iauction = require("iauction")
...
iauction({
  countdownInMin: 1,
  startDate: "2022/04/26 17:30:00",
  endDate: "2022/04/26 17:30:00",
  callback: (time) => console.log(time),
});

// UNIX date
iauction({
  countdownInMin: 2,
  startDate: 1650974160000,
  endDate: 1650974400000,
  callback: (time) => console.log(time),
});

// e.g React JS
import iauction from "iauction"

...
useEffect(() => {
  iauction({
    countdownInMin: 1,
    startDate: "2022/04/26 17:33:00",
    endDate: "2022/04/26 17:33:00",
    callback: (time) => console.log(time),
    // time ~ { start: [bool], time: [string], reps: [integer] }
  });
}, [])
```

| Parameters       | Value type | Description                                                                                                                                                                                                        | Information                                                                                                                              |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `countdownInMin` | `integer`  | set your timer interface, it will affect to your callback                                                                                                                                                          |  default `2`
| `startDate`      | `string`   | when to start, basically the timer always do their job, but `start` and `reps` will tell you is the status was `start` (_boolean_) and how many repetition (`reps`) left until the status `start` change to `true` | use your **local time** and set with the format (`YYYY-MM-DD HH:mm:ss`) this will be convert to universal time in the system             |
| `endDate`        | `string`   | when the countdown should stop and don't call your `callback` again                                                                                                                                                | use your **local time** and set with the format (`YYYY-MM-DD HH:mm:ss`) this will be convert to universal time in the system             |
| `callback`       | `function` | this function will return the `{ start: [boolean], time: [string], reps: [integer] }`                                                                                                                              | `start`: indicates is now time to start?, `time`: indicates the countdown, `reps`: how many repetition has been through from `startDate` |

## Why `iAuction`?

`iauction` helps you to watch your countdown and set the start and end datetime easier by using your local time.

`iauction` methods are great for:

<ul>
  <li>Handling auction such dutch auction for NFT</li>
  <li>Handling common auction</li>
</ul>

<div style="background-color: rgba(173, 57, 199, 0.26); color: white; padding: 1rem; margin-top: 3rem">
  <h4>Support this package by adding features 🏏</h4>
  
  <h4>Steps:</h4>
  <ul> 
    <li>Create feature on your local machine and make sure it's work</li> 
    <li>Don't forget to put documentation and also test case to help me use your feature</li> 
    <li>Make a <a href="https://github.com/irwansyafani/iauction/pulls" >request</a> from your branch <i>([username]-[feature_name])</i> to branch <i>features</i></li>
  </ul>

✏️ notes: please create your branch by following this format: ([username]-[feature_name])

</div>
