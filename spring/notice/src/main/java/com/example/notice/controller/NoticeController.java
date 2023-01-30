package com.example.notice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.notice.domain.Notice;
import com.example.notice.domain.NoticeRepository;

@RestController
@RequestMapping(value = "/notice")
public class NoticeController {
    @Autowired
    private NoticeRepository noticeRepository;
    @GetMapping(value = "/findAll")
    public List<Notice> findAllList(){
        return noticeRepository.findAll();
    }

    @PostMapping(value = "/addnotice")
    private Notice save(@RequestBody Notice notice){
        Notice add = noticeRepository.save(notice);
        return add;
    }
    @DeleteMapping(value = "/dele/{id}")
    public String dele(@PathVariable Long id){
        noticeRepository.deleteById(id);
        return "dele id :" + id;
    }

    @PutMapping(value = "/put")
    public Notice update(@RequestBody Notice notice){
        Notice remove = noticeRepository.save(notice);
        return remove;
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Notice> findById(@PathVariable final Long id){
        return noticeRepository.findById(id);
    }

}
