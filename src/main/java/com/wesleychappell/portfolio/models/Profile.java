package com.wesleychappell.portfolio.models;

public class Profile {

    private static final String NAME = "Wesley Alexander Chappell";
    private static final String LINKEDIN = "https://www.linkedin.com/in/weschap/";
    private static final String GITHUB = "https://github.com/Nukambe";

    private String subTitle;
    private String bio;
    private String quote;
    private String quoteAuthor;
    private String avatar = "/avatar.jpg";

    public Profile() {}

    public Profile(String subTitle, String bio, String quote, String quoteAuthor, String avatar) {
        this.subTitle = subTitle;
        this.bio = bio;
        this.quote = quote;
        this.quoteAuthor = quoteAuthor;
        this.avatar = avatar;
    }

    public String getName() { return NAME; }
    public String getLinkedin() { return LINKEDIN; }
    public String getGithub() { return GITHUB; }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getQuoteAuthor() {
        return quoteAuthor;
    }

    public void setQuoteAuthor(String quoteAuthor) {
        this.quoteAuthor = quoteAuthor;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
