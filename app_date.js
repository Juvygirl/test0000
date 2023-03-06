function getTimeString(time) {
  const timestamp = new Date(parseInt(time));
        const now = new Date();
        const diffMs = now.getTime() - timestamp.getTime();
        const diffSec = Math.round(diffMs / 1000);
        const diffMin = Math.round(diffSec / 60);
        const diffHr = Math.round(diffMin / 60);
        const diffDays = Math.round(diffHr / 24);

        if (diffSec < 60) {
          return 'Just now';
        } else if (diffMin < 60) {
          return `${diffMin}m`;
        } else if (diffHr < 24) {
          return `${diffHr}h`;
        } else if (diffDays == 1) {
          const hour = timestamp.getHours().toString().padStart(2, '0');
          const minute = timestamp.getMinutes().toString().padStart(2, '0');
          return `ytd ${hour}:${minute}`;
        } else if (diffDays < 7) {
          const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][timestamp.getDay()];
          const hour = timestamp.getHours().toString().padStart(2, '0');
          const minute = timestamp.getMinutes().toString().padStart(2, '0');
          return `${dayOfWeek} ${hour}:${minute}`;
        } else {
          const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][timestamp.getMonth()];
          const dayOfMonth = timestamp.getDate().toString().padStart(2, '0');
          const hour = timestamp.getHours().toString().padStart(2, '0');
          const minute = timestamp.getMinutes().toString().padStart(2, '0');
          return `${month} ${dayOfMonth} ${hour}:${minute}`;
        }
}


function getTimeString2(timestamp) {
	var now = new Date();
	var diff = now.getTime() / 1000 - timestamp / 1000; // Convert Firebase Timestamp to Unix timestamp in seconds


	if (diff < 100) {
		return "New";
	} else if (diff < 3600) {
		var minutes = Math.floor(diff / 60);
		return minutes + " minute" + (minutes == 1 ? "" : "s") + " ago";
	} else if (diff < 86400) {
		var hours = Math.floor(diff / 3600);
		return hours + " hour" + (hours == 1 ? "" : "s") + " ago";
	} else if (diff < 2592000) {
		var days = Math.floor(diff / 86400);
		if (days == 1) {
			return "Yesterday";
		} else if (days < 30) {
			return days + " day" + (days == 1 ? "" : "s") + " ago";
		} else {
			var months = Math.floor(days / 30);
			return months + " month" + (months == 1 ? "" : "s") + " ago";
		}
	} else if (diff < 15778476000) { // 6 months in seconds
		var date = new Date(timestamp.seconds * 1000);
		var options = {
			month: 'long',
			day: 'numeric'
		};
		return date.toLocaleDateString(undefined, options);
	} else {
		var date = new Date(timestamp.seconds * 1000);
		return date.toLocaleString();
	}
}