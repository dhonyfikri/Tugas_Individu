$(document).ready(function () {
    $('.deskripsiKRI').show();
    $('.deskripsiKRPAI').hide();
    $('.deskripsiSOFTWARE').hide();
    $('.product-normalize').hide();
    $('.project-normalize').hide();

    $('#education-sd').hide();
    $('#education-smp').hide();
    $('#education-smk').hide();
    $('#education-kuliah').hide();

    $('#korosel1').show();
    $('#deskripsiProject1').show();
    $('#judulProject1').show();
    $('#korosel2').hide();
    $('#deskripsiProject2').hide();
    $('#judulProject2').hide();
    $('#korosel3').hide();
    $('#deskripsiProject3').hide();
    $('#judulProject3').hide();
    $('#korosel4').hide();
    $('#deskripsiProject4').hide();
    $('#judulProject4').hide();
    $('#korosel5').hide();
    $('#deskripsiProject5').hide();
    $('#judulProject5').hide();
    $('#korosel6').hide();
    $('#deskripsiProject6').hide();
    $('#judulProject6').hide();
    $('#korosel7').hide();
    $('#deskripsiProject7').hide();
    $('#judulProject7').hide();

    $('#tombolKRI').click(function () {
        $('.deskripsiKRI').show(600);
        $('.deskripsiKRPAI').hide(600);
        $('.deskripsiSOFTWARE').hide(600);
    });
    $('#tombolKRPAI').click(function () {
        $('.deskripsiKRI').hide(600);
        $('.deskripsiKRPAI').show(600);
        $('.deskripsiSOFTWARE').hide(600);
    });
    $('#tombolSOFTWARE').click(function () {
        $('.deskripsiKRI').hide(600);
        $('.deskripsiKRPAI').hide(600);
        $('.deskripsiSOFTWARE').show(600);
    });
    $('#tblMyProduct').click(function () {
        $('.product-normalize').show(500);
        $('.project-normalize').hide(500);
    });
    $('#tblMyProject').click(function () {
        $('.product-normalize').hide(500);
        $('.project-normalize').show(500);
    });
    $('#tblTutupProduct').click(function () {
        $('.product-normalize').hide(300);
    });
    $('#tblTutupProject').click(function () {
        $('.project-normalize').hide(300);
    });

    $('#tutup-sd').click(function () {
        $('#education-sd').hide(500);
    });
    $('#tutup-smp').click(function () {
        $('#education-smp').hide(500);
    });
    $('#tutup-smk').click(function () {
        $('#education-smk').hide(500);
    });
    $('#tutup-kuliah').click(function () {
        $('#education-kuliah').hide(500);
    });

    $('#buka-sd').click(function () {
        $('#education-sd').show(500);
        $('#education-smp').hide();
        $('#education-smk').hide();
        $('#education-kuliah').hide();
    });
    $('#buka-smp').click(function () {
        $('#education-sd').hide();
        $('#education-smp').show(500);
        $('#education-smk').hide();
        $('#education-kuliah').hide();
    });
    $('#buka-smk').click(function () {
        $('#education-sd').hide();
        $('#education-smp').hide();
        $('#education-smk').show(500);
        $('#education-kuliah').hide();
    });
    $('#buka-kuliah').click(function () {
        $('#education-sd').hide();
        $('#education-smp').hide();
        $('#education-smk').hide();
        $('#education-kuliah').show(500);
    });

    $('#pilihan1').click(function () {
        $('#korosel1').show();
        $('#deskripsiProject1').show();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').show();
        $('#judulProject2').hide();
        $('#judulProject3').hide();
        $('#judulProject4').hide();
        $('#judulProject5').hide();
        $('#judulProject6').hide();
        $('#judulProject7').hide();
    });
    $('#pilihan2').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').show();
        $('#deskripsiProject2').show();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').hide();
        $('#judulProject2').show();
        $('#judulProject3').hide();
        $('#judulProject4').hide();
        $('#judulProject5').hide();
        $('#judulProject6').hide();
        $('#judulProject7').hide();
    });
    $('#pilihan3').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').show();
        $('#deskripsiProject3').show();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').hide();
        $('#judulProject2').hide();
        $('#judulProject3').show();
        $('#judulProject4').hide();
        $('#judulProject5').hide();
        $('#judulProject6').hide();
        $('#judulProject7').hide();
    });
    $('#pilihan4').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').show();
        $('#deskripsiProject4').show();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').hide();
        $('#judulProject2').hide();
        $('#judulProject3').hide();
        $('#judulProject4').show();
        $('#judulProject5').hide();
        $('#judulProject6').hide();
        $('#judulProject7').hide();
    });
    $('#pilihan5').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').show();
        $('#deskripsiProject5').show();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').hide();
        $('#judulProject2').hide();
        $('#judulProject3').hide();
        $('#judulProject4').hide();
        $('#judulProject5').show();
        $('#judulProject6').hide();
        $('#judulProject7').hide();
    });
    $('#pilihan6').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').show();
        $('#deskripsiProject6').show();
        $('#korosel7').hide();
        $('#deskripsiProject7').hide();
        $('#judulProject1').hide();
        $('#judulProject2').hide();
        $('#judulProject3').hide();
        $('#judulProject4').hide();
        $('#judulProject5').hide();
        $('#judulProject6').show();
        $('#judulProject7').hide();
    });
    $('#pilihan7').click(function () {
        $('#korosel1').hide();
        $('#deskripsiProject1').hide();
        $('#korosel2').hide();
        $('#deskripsiProject2').hide();
        $('#korosel3').hide();
        $('#deskripsiProject3').hide();
        $('#korosel4').hide();
        $('#deskripsiProject4').hide();
        $('#korosel5').hide();
        $('#deskripsiProject5').hide();
        $('#korosel6').hide();
        $('#deskripsiProject6').hide();
        $('#korosel7').show();
        $('#deskripsiProject7').show();
        $('#judulProject1').hide();
        $('#judulProject2').hide();
        $('#judulProject3').hide();
        $('#judulProject4').hide();
        $('#judulProject5').hide();
        $('#judulProject6').hide();
        $('#judulProject7').show();
    });
});