(function() {
  //Consructor to tie questions with answers and id
  //
  // var questions = [];
  //
  // function Question(id, question, ans1, ans2, ans3) {
  //   this.id = id;
  //   this.question = question;
  //   this.ans1 = answer1 {
  //     this.category;
  //   };
  //   this.ans2 = ans2;
  //   this.ans3 = ans3;
  // }

  function newQuestion() {
    $("#add-edit").slideDown("slow");
  }

  function cancelAddEdit() {
      $("#add-edit").slideUp();
      $("#new-text").val("");
  }

  function addListItem() {
    var $text = $("#new-text").val();
    var $ans1 = $("ans1").val();
    var $ans2 = $("#ans2").val();
    var $ans3 = $("#ans3").val();


    $("#questions-list").append('<li class="list-group-item">' +
    '<span class="badge pull-left col-xs-1">?</span>' + $text +
    '<span><a href="#" class="col-xs-offset-7">Edit</a></span>' +
    '<span class="delete glyphicon glyphicon-trash pull-right" aria-hidden="true"><a href="#"></a></span></li>');

    // var question = new Question

    $("#add-edit").slideUp();
    $("#new-text").val("");


  }

  function removeListItem() {
    $(this).parent().remove();
  }

  function editQuestion() {
    var text = $(this)
    var edited = text.children(":first");
    $("#new-text").clone().appendTo(edited);
    $('.editable').attr('contenteditable', 'true');
    newQuestion();

  }

  $(document).ready(function() {
      // $('div').fadeIn('slow');
      $("#add").on('click', addListItem);

      $(".delete").on('click', removeListItem);
      $(document).on('click', '.delete', removeListItem);

      $("#new-question").on('click', newQuestion);

      $(".edit").on('click', editQuestion);
      $(document).on('click', '.edit', editQuestion);

      $("#cancel").on('click', cancelAddEdit);

      // $("#questions-list").sortable();
      // $("#questions-list").disableSelection();
  });
})();
