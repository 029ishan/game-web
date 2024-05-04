export function Esewa ({path,params}){
    var form = document.createElement("form");
    form.setAttribute("method","POST");
    form.setAttribute("action",path);
    
    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type","hidden");
        hiddenField.setAttribute("name",key);
        hiddenField.setAttribute("value",params[key]);
        form.appendChild(hiddenField);

    }
    document.body.appendChild(form);
    form.submit();
}