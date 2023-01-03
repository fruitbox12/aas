const timeSince = prevDate => {
  const currDate = Date.now();
  const seconds = Math.floor((currDate - prevDate) / 1000);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }
  
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) {
      return `${minutes} minute ago`;
    } else {
      return `${minutes} minutes ago`;
    }
  }
  
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    if (hours === 1) {
      return `${hours} hour ago`;
    } else {
      return `${hours} hours ago`;
    }
  }
  
  if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    if (days === 1) {
      return `yesterday`;
    } else {
      return `${days} days ago`;
    }
  }
  
  const days = Math.floor(seconds / 86400);
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    if (weeks === 1) {
      return `${weeks} week ago`;
    } else {
      return `${weeks} weeks ago`;
    }
  }
  
  const weeks = Math.floor(days / 7);
  if (weeks < 53) {
    const months = Math.floor( weeks / 4);
    if (months === 1) {
      return `${months} month ago`;
    } else {
      return `${months} months ago`;
    }
  }
    
  prevDate = new Date(prevDate);
  return `${prevDate.getMonth() + 1}/${prevDate.getDate()}/${prevDate.getFullYear()}`;
};
  
export default timeSince;
  