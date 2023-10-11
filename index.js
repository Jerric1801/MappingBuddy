const ISmods = {"IS": [{"label": "IS.215 Digital Business - Technologies and Transformation", "value": "IS.215"}, {"label": "IS.404 Technology Entrepreneurship Study Mission (Asia)", "value": "IS.404"}, {"label": "IS.425 Digital Transformation Strategy", "value": "IS.425"}, {"label": "IS.428 Visual Analytics for Business Intelligence", "value": "IS.428"}, {"label": "IS.444 Digital Banking Enterprise Architecture", "value": "IS.444"}, {"label": "IS.446 Managing Customer Relations with Analytics: Asian Insights", "value": "IS.446"}, {"label": "IS105 Business Data Management", "value": "IS105"}, {"label": "IS110 Information Systems and Innovation", "value": "IS110"}, {"label": "IS111 Introduction to Programming", "value": "IS111"}, {"label": "IS113 Web Application Development I", "value": "IS113"}, {"label": "IS210 Business Process Analysis & Solutioning", "value": "IS210"}, {"label": "IS211 Interaction Design and Prototyping", "value": "IS211"}, {"label": "IS212 Software Project Management", "value": "IS212"}, {"label": "IS216 Web Application Development II", "value": "IS216"}, {"label": "IS217 Analytics Foundation", "value": "IS217"}, {"label": "IS412 Enterprise Business Solutions", "value": "IS412"}, {"label": "IS419 Retail Banking and Mobile Technology", "value": "IS419"}, {"label": "IS423 Financial Markets Processes and Technology", "value": "IS423"}, {"label": "IS424 Data Mining and Business Analytics", "value": "IS424"}, {"label": "IS430 Digital Payments and Innovation", "value": "IS430"}, {"label": "IS434 Social Analytics and Applications", "value": "IS434"}, {"label": "IS442 Object Oriented Programming", "value": "IS442"}, {"label": "IS452 Blockchain Applications in Financial Services", "value": "IS452"}, {"label": "IS453 Financial Analytics", "value": "IS453"}, {"label": "IS455 Overseas Project Experience (Data Analytics in Asia)", "value": "IS455"}, {"label": "IS457 Fairness in Socio-technical Systems", "value": "IS457"}, {"label": "IS458 Cloud Management and Engineering", "value": "IS458"}, {"label": "IS459 Big Data Architecture", "value": "IS459"}, {"label": "IS460 Machine Learning & Applications", "value": "IS460"}, {"label": "IS461 AI Governance", "value": "IS461"}, {"label": "IS470 Guided Research in Computing", "value": "IS470"}, {"label": "IS471 Guided Research in Computing 2", "value": "IS471"}, {"label": "IS472 Guided Advanced Research in Computing", "value": "IS472"}, {"label": "IS483 IS/SMT Project Experience (Applications)", "value": "IS483"}, {"label": "IS484 IS Project Experience [FinTech]", "value": "IS484"}, {"label": "IS490 Google Analytics Work-Study Elective", "value": "IS490"}, {"label": "IS602 Spreadsheets Modeling for Decision Making", "value": "IS602"}, {"label": "IS604 Global Sourcing of Technology and Processes", "value": "IS604"}, {"label": "IS607 Capstone Project - Data Science and Engineering", "value": "IS607"}, {"label": "IS610 Capstone Project - Cybersecurity", "value": "IS610"}, {"label": "IS612 Project", "value": "IS612"}, {"label": "IS613 Cybersecurity Technology and Applications", "value": "IS613"}, {"label": "IS614 IoT: Technology and Applications", "value": "IS614"}, {"label": "IS615 Digital Transformation Strategy", "value": "IS615"}, {"label": "IS616 Internship", "value": "IS616"}, {"label": "IS617 Capstone Project - Software and Cyber-Physical Systems", "value": "IS617"}, {"label": "IS620 Digital Organization and Change Management", "value": "IS620"}, {"label": "IS711 Learning and Planning in Intelligent Systems", "value": "IS711"}, {"label": "IS712 Machine Learning", "value": "IS712"}, {"label": "IS713 Foundations for Data Analytics", "value": "IS713"}, {"label": "IS718 Empirical Research Project I", "value": "IS718"}, {"label": "IS720 Empirical Research Project III", "value": "IS720"}, {"label": "IS721 Research Seminars I", "value": "IS721"}, {"label": "IS722 Research Seminars II", "value": "IS722"}, {"label": "IS771 Empirical Research Project 1", "value": "IS771"}, {"label": "IS772 Empirical Research Project 2", "value": "IS772"}, {"label": "IS773 Empirical Research Project 3", "value": "IS773"}, {"label": "IS774 Empirical Research Project 4", "value": "IS774"}, {"label": "IS783 Seminars in Information Systems 1", "value": "IS783"}, {"label": "IS784 Seminars in Information Systems 2", "value": "IS784"}, {"label": "IS786 Research Topics in Information Systems 1", "value": "IS786"}, {"label": "IS787 Research Topics in Information System 2", "value": "IS787"}]}
const user = {
  "user": [
    {
      "major": {
        "name": "Smart City Society"
      },
      "sem": {
        "Y1S1": ["IS111 Introduction to Programming", "SMT113 Sensors and IOT", "COR2204 Science Meets Society", "IS110 Information Systems and Innovation"],
        "Y1S2": ["IS112 Data Management", "IS217 Analytics Foundation", "COR1701 Critical Thinking in the Real World",  "CS101 Programming Fundamentals I"],
        "Y2S1": [],
        "Y2S2": [],
        "Y3S1": [],
        "Y3S2": [],
        "Y4S1": [],
        "Y4S2": []
      }
    }
  ]
}



function getBoard(index) {
  $(".tab").each(function() {
    if($(this).hasClass("selectTab")){
      $(this).removeClass("selectTab")
    }
  })
  $(".tab").eq(index).addClass("selectTab")
  var boards = JSON.parse(localStorage.getItem("Boards")) 
  var board = boards[index]
}

function toggleFocus(){
  console.log('print')
  $("#mainBoard").toggleClass("focus");
}

function createTab(boardName) {
  var tab = $("<div>").attr({
    class: "tab"
  })

  tab.append("<p>" + boardName + "</p>")

  return tab 
}

function createModule(text, style){
    var module = $("<div>").attr({
      // id: "drag" + String(count),
      class: "moduleCard draggable",
      style: style
    });
    module.draggable()

    var course_id = text.split(' ')[0]
    var course_name = text.split(' ').slice(1).join(' ')
    module.append("<div class = 'moduleColor'>" + "</div")
    module.append("<p style = 'font-size: larger; font-weight: bold;'>" + course_id + "</p>" );
    module.append("<p>" + course_name + "</p>" );

    return module
}

function addTab(first = false){
  if (first) {
    var firstBoard = {}
    firstBoard["No"] = "board_1"
    firstBoard["data"] = user
    var newBoards = []
    newBoards.push(firstBoard)
    localStorage.setItem("Boards", JSON.stringify(newBoards))
    // show first bar selected
  }
  var boards = JSON.parse(localStorage.getItem("Boards"))
  var board_no = `board_${boards.length}`
  var board = {}
  
  board["No"] = board_no
  // change assignment based on functionality
  board["data"] = user 

  boards.push(board)
  Tab = createTab(board_no)
  localStorage.setItem("Boards", JSON.stringify(boards))

  Tab.click(function(event) {

    getBoard($(this).index())
    
  })

  Tab.appendTo($("#tabContainer"))

  if (first){
    $(".tab").eq(0).addClass("selectTab")
  }
}


$(document).ready(function() {
  
  addTab(true)

  $("#searchbar").keyup(function() {
    // Get the search term
    var searchTerm = $(this).val();

    // Filter the JSON data based on the search term
    var filteredData = ISmods.IS.filter(function(course) {
      return course.label.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Update the search results with the filtered JSON data
    $("#searchResult").empty();
    var count = 0
    $.each(filteredData, function(index, course) {
      if (count === 4) {
        return;
      }

      style = "margin-top: 10px; position: relative;"
      text = course.label
      module = createModule(text, style)

      module.appendTo($("#searchResult"))
      count++ 
    });
  });

  const sem = user.user[0].sem
  const mainBoard = $("#mainBoard")
  $.each(sem, function(key, value) {
    var semContainer = $("<div>").attr({
      class : "semContainer droppable",
    });

    semContainer.append("<div class = 'semTitle'>"+"<h2>" + key + "</h2>"+"</div>");

    for (index in value) {

      text = value[index]
      style = "margin-top: 10px; position: relative;"
      module = createModule(text, style)

      module.appendTo(semContainer)
    }

    // clone.children("H1").html(key)
    semContainer.appendTo(mainBoard)
  })

  // Make all elements with the class "droppable" droppable
  $(".droppable").droppable({
    drop: function(event, ui) {
      // Move the draggable element to the droppable element
      ui.draggable.appendTo($(this));
      ui.draggable.css("top", 0)
      ui.draggable.css("left", 0)
      ui.draggable.attr("style", "width:95%; height: 100px; margin-top: 10px; position: relative;")
    }
  });


})
