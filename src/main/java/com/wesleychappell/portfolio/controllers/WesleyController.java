package com.wesleychappell.portfolio.controllers;

import com.wesleychappell.portfolio.models.Profile;
import com.wesleychappell.portfolio.services.ProfileService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WesleyController {

    private final ProfileService profileService;

    public WesleyController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/")
    public String profile(Model model) {
        Profile profile = profileService.getProfile();
        model.addAttribute("profile", profile);
        return "index";
    }
}
