// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Priya",
  questions: [
    {
      text: "1.)I come ..... Italy.",
      responses: [
      { text: "to" },
      { text: "from", correct: true },
      { text: "at" },
      { text: "in" }] },
  
  
    {
      text: "2.)......... do you go to the gym?",
      responses: [
      { text: "How", correct: true },
      { text: "Where" },
      { text: "why" },
      { text: "How often" }] },
  
  
    {
      text: "3.)I like ........ in my spare time.",
      responses: [
      { text: "to read" },
      { text: "read", correct: true },
      { text: "reading" },
      { text: "to reading" }] },
  
  
    {
      text: "4.)Chopin .................. music when he was three.",
      responses: [
      { text: "can't read", correct: true },
      { text: "can read" },
      {
        text: "could read" },
  
      { text: "can to read " }] },
  
  
    {
      text: "5.)I ......... born in 1992.",
      responses: [
      { text: "am " },
      {
        text: "is" },
  
      { text: "was", correct: true },
      { text: "were" }] },
  
  
    {
      text:
      "6.)Where ......... Ann and Mary at 6 pm yesterday?",
      responses: [
      { text: "are" },
      { text: "was" },
      { text: "were", correct: true },
      { text: "have been" }] },
  
  
    {
      text: "7.)I went to the bookshop .................... 'Harry Potter'. ",
      responses: [
      { text: "to buy ", correct: true },
      { text: " to buying" },
      {
        text: "for buying" },
  
      { text: "to for buy" }] },
  
  
    {
      text: "8.)He is interested ......... learning Romanian.",
      responses: [
      { text: "on" },
      { text: "in", correct: true },
      { text: "to" },
      { text: "for" }] },
  
  
    {
      text:
      "9.)Would you like .......... to drink, sir?",
      responses: [
      {
        text: "anything" },
  
      { text: "nothing" },
      { text: "something", correct: true },
      { text: "anywhere" }] },
  
  
    {
      text: "10.)The doctor gave me a ..........for some medicine last week.",
      responses: [
      { text: "note" },
      { text: "prescription", correct: true },
      { text: "recipe" },
      { text: "receipt" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });