function getAll(){
    return $.ajax({
        cache: false,
        url: "./libs/php/getAll.php",
        dataType: "json",
        type: "post",
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}
function getAllLocations(){
    return $.ajax({
        cache: false,
        url: "./libs/php/getAllLocations.php",
        dataType: "json",
        type: "post",
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

function getAllDepartments(){
    return $.ajax({
        cache: false,
        url: "./libs/php/getAllDepartments.php",
        dataType: "json",
        type: "post",
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

function getAllByDepartmentFilter(value){
    return $.ajax({
        cache: false,
        url: "./libs/php/getAllByDepartmentFilter.php",
        dataType: "json",
        type: "post",
        data: { id: value },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

function getAllByLocationFilter(value){
    return $.ajax({
        cache: false,
        url: "./libs/php/getAllByLocationFilter.php",
        dataType: "json",
        type: "post",
        data: { id: value },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}


function searchQuery(searchVal){
    return $.ajax({
        cache: false,
        url: "./libs/php/searchBarQuery.php",
        dataType: "json",
        type: "post",
        data: { searchVal },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

function insertPersonnel(firstName, lastName, jobTitle, email, departmentID){
    return $.ajax({
        cache: false,
        url: "./libs/php/insertPersonnel.php",
        dataType: "json",
        type: "post",
        data: {firstName, lastName, jobTitle, email, departmentID},
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

function updatePersonnel(firstName, lastName, jobTitle, email, departmentID, id){
    return $.ajax({
        cache: false,
        url: "./libs/php/updatePersonnel.php",
        dataType: "json",
        type: "post",
        data: {firstName, lastName, jobTitle, email, departmentID, id},
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
        })
}

function getPersonnelByID(id){
    return $.ajax({
        cache: false,
        url: "./libs/php/getPersonnelByID.php",
        dataType: "json",
        type: "post",
        data: {id},
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}
function deletePersonnelByID(id){
    return $.ajax({
        cache: false,
        url: "./libs/php/deletePersonnelByID.php",
        dataType: "json",
        type: "post",
        data: {id},
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log('status: ', textStatus, 'error: ', errorThrown); 
        }  
    })
}

export {getAll, getAllLocations, getAllDepartments, getAllByDepartmentFilter, getAllByLocationFilter, searchQuery, insertPersonnel, updatePersonnel, getPersonnelByID, deletePersonnelByID};