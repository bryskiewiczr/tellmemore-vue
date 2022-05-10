<template>
  <div>
    <b-card class="chat-window shadow-lg" border-variant="success">
      <!-- Message one  -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/hollyflax.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruiter.good_name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.good.recruiter.msgs.ts1') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.good.recruiter.msgs.msg1_a') }}
            <span class="chat-link">{{
              $t('chat.good.recruiter.msgs.msg1_company_website')
            }}</span
            >{{ $t('chat.good.recruiter.msgs.msg1_b') }}
            <span class="chat-link">{{
              $t('chat.good.recruiter.msgs.msg1_role_desc')
            }}</span
            >{{ $t('chat.good.recruiter.msgs.msg1_c') }}
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
            >· {{ $t('chat.good.recruitee.msgs.ts1') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.good.recruitee.msgs.msg1') }}
            {{ $t('chat.good.recruitee.msgs.msg1_calltime') }}
          </p>
        </b-col>
      </b-row>
      <!-- Message three -->
      <b-row>
        <b-col class="col-auto">
          <img class="chat-avatar" src="../assets/hollyflax.jpg" />
        </b-col>
        <b-col>
          <span class="chat-name">{{ $t('chat.recruiter.good_name') }}</span>
          <span class="chat-time"
            >· {{ $t('chat.good.recruiter.msgs.ts2') }}</span
          >
          <br />
          <p class="chat-msg">
            {{ $t('chat.good.recruiter.msgs.msg2_a') }}
            {{ $t('chat.good.recruiter.msgs.msg2_calltime') }}
            {{ $t('chat.good.recruiter.msgs.msg2_b') }}
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
            >· {{ $t('chat.good.recruitee.msgs.ts2') }}</span
          >
          <br />
          <span class="chat-msg">
            {{ $t('chat.good.recruitee.msgs.msg2') }}
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
