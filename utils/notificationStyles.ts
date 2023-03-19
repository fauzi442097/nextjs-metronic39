const setIcon = (type : string) => {
   switch ( type ) {
      case "info" :
         return 'bi bi-info';
     case "success" :
         return 'bi bi-check';
     case "warning" :
         return 'bi-exclamation';
     case "error" :
         return 'bi-x';
     default :
         return 'bi bi-info';
   }
}

const setBgColor = (type: string) => {
   switch ( type ) {
      case "info":
          return "bg-primary";
      case "success":
          return "bg-success";
      case "warning":
          return "bg-warning";
      case "error":
          return "bg-danger";
      default:
          return "bg-dark"
  }
}

const setColor = (type: string) => {
   switch ( type ) {
      case "info" :
          return "text-primary";
      case "success":
          return "text-success";
      case "warning":
          return "text-warning";
      case "error" :
          return "text-danger";
      default:
          return "text-dark"
  } 
}

const setGradient = (type: string) => {
   switch ( type ) {
      case "info": 
          return "linear-gradient(90deg, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 100%)"
      case "success" :
          return "linear-gradient(90deg, rgba(154,229,188,1) 0%, rgba(232,255,243,1) 0%, rgba(255,255,255,1) 100%)"
      case "warning" :
          return "linear-gradient(90deg, rgba(255,248,221,1) 0%, rgba(255,248,221,1) 0%, rgba(255,255,255,1) 100%)"
      case "error":
          return "linear-gradient(90deg, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,255,255,1) 100%)"
      default:
          return "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)"
  }
}

const setTitle = (type: string, title: string | undefined) => {
   if ( !title ) {
      switch ( type ) {
          case 'info': return 'Info'
          case 'success': return 'Sukses'
          case 'warning': return 'Warning'
          case 'error': return 'Error'
          default: 
              return 'Info'
      }
  } else {
      return title;
  }
}

const notificationStyle = {
   setIcon, 
   setBgColor,
   setColor,
   setTitle,
   setGradient
}

export default notificationStyle;