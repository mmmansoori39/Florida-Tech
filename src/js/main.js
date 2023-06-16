// Count plus and minus start //
$(document).ready(function()
    {
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
 });
// Count plus and minus end //

// Count0 plus and minus start //
$(document).ready(function()
    {
    $('.count0').prop('disabled', true);
       $(document).on('click','.plus0',function(){
        $('.count0').val(parseInt($('.count0').val()) + 1 );
    });
    $(document).on('click','.minus0',function(){
        $('.count0').val(parseInt($('.count0').val()) - 1 );
            if ($('.count0').val() == 0) {
                $('.count0').val(1);
            }
        });
 });
// Count0 plus and minus end //

// Count1 plus and minus start //
    $(document).ready(function()
    {
    $('.count1').prop('disabled', true);
       $(document).on('click','.plus1',function(){
        $('.count1').val(parseInt($('.count1').val()) + 1 );
    });
    $(document).on('click','.minus1',function(){
        $('.count1').val(parseInt($('.count1').val()) - 1 );
            if ($('.count1').val() == 0) {
                $('.count1').val(1);
            }
        });
 });
// Count1 plus and minus end //
// Count2 plus and minus start //
    $(document).ready(function()
    {
    $('.count2').prop('disabled', true);
       $(document).on('click','.plus2',function(){
        $('.count2').val(parseInt($('.count2').val()) + 1 );
    });
    $(document).on('click','.minus2',function(){
        $('.count2').val(parseInt($('.count2').val()) - 1 );
            if ($('.count2').val() == 0) {
                $('.count2').val(1);
            }
        });
 });
 // Count2 plus and minus end //