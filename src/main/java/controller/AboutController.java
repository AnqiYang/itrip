package controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by mandyxue on 15/6/11.
 */
@Controller
public class AboutController {
    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String Home(Model model) {
        return "about";
    }
}
