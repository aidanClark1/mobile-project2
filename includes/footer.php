<div id="preloader">
</div>

<!-- Font awesome -->
<script src="./vendors/Fontawesome5.15.3/js/all.min.js" crossorigin="anonymous"></script>
<!-- Font awesome -->

<!-- jquery script -->
<script src="./vendors/jquery/jquery-3.6.0.min.js"></script>

<!-- jquery script -->


<!-- bootstrap script -->
<script src="./vendors/bootstrap/js/popper.js"></script>
<script src="./vendors/bootstrap/js/bootstrap.bundle.js"></script>
<!-- bootstrap script -->

<!-- select2 -->
<script src="./vendors/select2/select2.min.js"></script>
<!-- select2 -->

<!-- perfect scrollbar -->
<script src="./vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<!-- perfect scrollbar -->

<script>
    $('.js-pscroll').each(function() {
        var ps = new PerfectScrollbar(this);

        $(window).on('resize', function() {
            ps.update();
        })
    });
</script>

<script type="module" src="js\script.js">

</script>
</body>

</html>