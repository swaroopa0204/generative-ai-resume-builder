package com.resumeai.resume_backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ResumeController {

    @Value("${openai.api.key}")
    public String openApiKey;

    @PostMapping("/generate")
    public ResponseEntity<String> generateResume(@RequestBody Map<String, String> input) {
        try {
            String resumeData = input.get("resume");
            String jobDescription = input.get("description");

            System.out.println("Using OpenAI Key: " + openApiKey); // 🔍
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(openApiKey);

            String prompt = "Generate a tailored ATS friendly resume with quantifies for the follwing Job:\n" + jobDescription +
                    "Using this candidate info:\n" + resumeData;

            Map<String, Object> body = new HashMap<>();
            body.put("model", "gpt-3.5-turbo-1106");
            body.put("messages", List.of(Map.of("role", "user", "content", prompt)));
            body.put("max_tokens", 500);
            body.put("temperature", 0.2);


            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
            String url = "https://api.openai.com/v1/chat/completions";


            ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);
            String content = ((Map) ((List) response.getBody().get("choices")).get(0)).get("message").toString();
            return ResponseEntity.ok(content);
        }
            catch (Exception e) {
                e.printStackTrace(); // Log to console
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
}


