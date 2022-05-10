<template>
  <div>
    <b-card class="chat-window shadow-lg" border-variant="danger">
      <!-- Message one -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/tobyflenderson.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruiter.bad_name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.bad.recruiter.msgs.ts1') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.bad.recruiter.msgs.msg1') }}
          </p>
        </b-col>
      </b-row>
      <!-- Message two -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/jimhalpert.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruitee.name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.bad.recruitee.msgs.ts1') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.bad.recruitee.msgs.msg1') }}
          </p>
        </b-col>
      </b-row>
      <!-- Message three -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/tobyflenderson.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruiter.bad_name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.bad.recruiter.msgs.ts2') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.bad.recruiter.msgs.msg2') }}
            <span class="chat-link">{{
              $t('chat.bad.recruiter.msgs.msg_survey')
            }}</span
            >{{ $t('punctuation.question') }}
          </p>
        </b-col>
      </b-row>
      <!-- Message four -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/jimhalpert.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruitee.name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.bad.recruitee.msgs.ts2') }}</span
          >
          <br />
          <span class="chat-msg">
            {{ $t('chat.bad.recruitee.msgs.msg2') }}
          </span>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style scoped>
.chat-window {
  border-radius: 5%;
}

.chat-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.chat-name {
  font-size: 1rem;
  font-weight: 600;
}

.chat-time {
  font-size: 0.8rem;
}

.chat-msg {
  font-size: 1rem;
}

.chat-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
