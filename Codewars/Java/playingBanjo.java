public class playingBanjo {
    public static String areYouPlayingBanjo(String name) {
        // Program me!
        if(name.charAt(0) == 'R' || name.charAt(0) == 'r') {
          return name + " plays banjo";
        }
        else {
          return name + " does not play banjo";
        }
      }
}
