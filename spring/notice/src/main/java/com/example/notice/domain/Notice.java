package com.example.notice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "notice")
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    private String title;
    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    private String detail;
    public String getDetail(){
        return detail;
    }
    public void setDetail(String detail){
        this.detail = detail;
    }

    private String release_date;
    public String getRelease_date(){
        return release_date;
    }
    public void setRelease_date(String release_date){
        this.release_date = release_date;
    }

    private String deadline_date;
    public String getDeadline_date(){
        return deadline_date;
    }
    public void setDeadline_date(String deadline_date){
        this.deadline_date = deadline_date;
    }

    public Notice(){}
    public Notice(String title, String detail, String release_date, String deadline_date){
        this.title = title;
        this.detail = detail;
        this.release_date =release_date;
        this.deadline_date = deadline_date;
    }
}
