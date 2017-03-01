// Before
{
  msg: 'Hello',
  delayMsg: function () {
    var self = this;
    setTimeout(function () { console.log(self.msg) }, 1000)
  }
}

// Now
{
  msg: 'Hello',
  delayMsg: function () {
    setTimeout(() => console.log(self.msg), 1000);
  }
}
