
$(document).ready(function() {
    $("#order-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
       },

       messages:{
            name:{
                required: "",
            },
            phone:{
                required: "",
            }
       }
    });  

    $("#phone-order").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
       },

       messages:{
            name:{
                required: "",
            },
            phone:{
                required: "",
            },
       }
    });

    $("#calc").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
            email:{
                required: true,
            }
       },

       messages:{
            name:{
                required: "",
            },
            phone:{
                required: "",
            },
            email:{
                required: "",
            }
       }
    });
    
    $("#bottom-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
            message:{
                required: true,
            }
       },

       messages:{
            name:{
                required: "",
            },
            phone:{
                required: "",
            },
            message:{
                required: "",
            }
       }
    });
});