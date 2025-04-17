package com.ai.SpringAi;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    @Autowired
    private ChatModel chatModel;

    public String getResponse(String prompt) {
        try {
            return chatModel.call(prompt);
        } catch (Exception e) {
            throw e;
        }
    }

    public String getChatOptions(String prompt) {
        try {
            ChatResponse response = chatModel.call(
                    new Prompt(
                            "Generate the names of 5 famous pirates.",
                            OpenAiChatOptions.builder()
                                    .model("deepseek-chat")
                                    .temperature(0.4)
                                    .build()));
            return response.getResult().getOutput().getText();
        } catch (Exception e) {
            throw e;
        }
    }

}
