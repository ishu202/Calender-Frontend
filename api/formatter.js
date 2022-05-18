import moment from "moment";

class Formatter {
  static format_time( time ){
    return moment(time , "HH:mm A").format("h:mma")
  }
}

export default Formatter;
