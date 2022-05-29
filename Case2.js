const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

let nilai = 0;
function sumTotal(comment) {
  const foundComment2 = Object.keys(comment).forEach((data) => {
    // console.log(`key : ${data}, value : ${comment[data]}`);
    if (data.includes("commentId")) {
      nilai = nilai + 1;
    }
    if (typeof comment[data] === "object" && comment[data] !== null) {
      sumTotal(comment[data]);
    }
  });

  //   console.log(nilai);
  return nilai;
}

const coba = sumTotal(comments);
console.log(coba);
