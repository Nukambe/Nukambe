package com.wesleychappell.portfolio.services;

import com.wesleychappell.portfolio.models.Profile;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Override
    public Profile getProfile() {
        return new Profile();
    }
}
