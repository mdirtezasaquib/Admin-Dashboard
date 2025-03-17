
    let menuIcon = document.querySelector(".menu-icon");
    let sidebar = document.querySelector(".sidebar");

    
    menuIcon.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });


    var barOptions = {
        chart: {
            type: "bar",
            height: 300
        },
        series: [{
            name: "Sales",
            data: [90, 75, 60, 50, 30]
        }],
        xaxis: {
            categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"]
        },
        colors: ["#FF9800"],
        tooltip: {
            enabled: true
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%"
            }
        }
    };
    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);
    barChart.render();


    var lineOptions = {
        chart: {
            type: "line",
            height: 300,
            zoom: { enabled: true },
        },
        series: [
            {
                name: "Sales Orders",
                data: [10, 30, 40, 70, 50, 80]
            },
            {
                name: "Purchase Orders",
                data: [20, 40, 50, 80, 60, 90]
            }
        ],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        stroke: {
            width: 2
        },
        colors: ["#1E88E5", "#E53935"],
        tooltip: {
            enabled: true
        }
    };
    new ApexCharts(document.querySelector("#line-chart"), lineOptions).render();




async function fetchUserCount() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        document.getElementById('userCount').textContent = users.length;
    } catch (error) {
        console.log("Error fetching users : ",error);
    }
}
fetchUserCount();

async function fetchPostCount() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        document.getElementById('postCount').textContent = posts.length;
    } catch (error) {
        console.log("Error fetching posts : ",error);
    }
}
fetchPostCount();

async function fetchPhotoCount() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();
        document.getElementById('photoCount').textContent = photos.length;
    } catch (error){
        console.log("Error fetching photos : ",error);
    }
}

fetchPhotoCount();






