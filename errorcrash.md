-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Incident Identifier: D1D00D4A-88A7-44F7-88F6-36EF4EF92D8A
CrashReporter Key:   F0353C10-1526-5869-4A78-A2D2237134E3
Hardware Model:      Mac14,2
Process:             Expo Go [80357]
Path:                /Users/USER/Library/Developer/CoreSimulator/Devices/29237E46-92B3-413F-94A4-ABCAEF3628D6/data/Containers/Bundle/Application/145D204B-85A1-494A-ABED-2BBA7856D5E4/Expo-Go-54.0.6.tar.app/Expo Go
Identifier:          host.exp.Exponent
Version:             54.0.6 (54.0.6)
Code Type:           ARM-64 (Native)
Role:                Foreground
Parent Process:      launchd_sim [80106]
Coalition:           com.apple.CoreSimulator.SimDevice.29237E46-92B3-413F-94A4-ABCAEF3628D6 [108241]
Responsible Process: SimulatorTrampoline [25429]

Date/Time:           2026-01-01 16:02:59.5392 +0300
Launch Time:         2026-01-01 16:02:53.7306 +0300
OS Version:          macOS 15.6.1 (24G90)
Release Type:        User
Report Version:      104

Exception Type:  EXC_CRASH (SIGABRT)
Exception Codes: 0x0000000000000000, 0x0000000000000000
Termination Reason: SIGNAL 6 Abort trap: 6
Terminating Process: Expo Go [80357]

Triggered by Thread:  0

Kernel Triage:
VM - (arg = 0x3) mach_vm_allocate_kernel failed within call to vm_map_enter


Thread 0 Crashed::  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib        	       0x10ae64874 __pthread_kill + 8
1   libsystem_pthread.dylib       	       0x10adb62ec pthread_kill + 264
2   libsystem_c.dylib             	       0x180171f20 __abort + 108
3   libsystem_c.dylib             	       0x180171eb4 abort + 112
4   libc++abi.dylib               	       0x1802b0144 abort_message + 128
5   libc++abi.dylib               	       0x18029fe30 demangling_terminate_handler() + 268
6   libobjc.A.dylib               	       0x18006f230 _objc_terminate() + 140
7   Expo Go                       	       0x1054de308 FIRCLSTerminateHandler() + 332
8   libc++abi.dylib               	       0x1802af570 std::__terminate(void (*)()) + 12
9   libc++abi.dylib               	       0x1802b2688 __cxa_rethrow + 128
10  libobjc.A.dylib               	       0x180093960 objc_exception_rethrow + 40
11  Expo Go                       	       0x1058a2db4 invocation function for block in facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*) + 200
12  Expo Go                       	       0x1058a7870 std::__1::__function::__func<facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*)::$_1, std::__1::allocator<facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*)::$_1>, void ()>::operator()() + 104
13  libdispatch.dylib             	       0x18017c788 _dispatch_call_block_and_release + 24
14  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
15  libdispatch.dylib             	       0x1801b300c <deduplicated_symbol> + 24
16  libdispatch.dylib             	       0x18018c1c4 _dispatch_main_queue_drain + 1184
17  libdispatch.dylib             	       0x18018bd14 _dispatch_main_queue_callback_4CF + 40
18  CoreFoundation                	       0x180428e9c __CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__ + 12
19  CoreFoundation                	       0x1804238a8 __CFRunLoopRun + 1920
20  CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
21  GraphicsServices              	       0x191004d00 GSEventRunModal + 164
22  UIKitCore                     	       0x185c597d4 -[UIApplication _run] + 796
23  UIKitCore                     	       0x185c5dba0 UIApplicationMain + 124
24  Expo Go                       	       0x105034424 main + 64
25  ???                           	       0x10ab093d4 ???
26  dyld                          	       0x10abeab98 start + 6076

Thread 1:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 2::  Dispatch queue: APMPersistedConfig
0   libdispatch.dylib             	       0x18018c9bc _dispatch_block_async_invoke2 + 88
1   libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
2   libdispatch.dylib             	       0x180181498 _dispatch_continuation_pop + 776
3   libdispatch.dylib             	       0x1801943e8 _dispatch_source_invoke + 1808
4   libdispatch.dylib             	       0x180185828 _dispatch_lane_serial_drain + 304
5   libdispatch.dylib             	       0x180186590 _dispatch_lane_invoke + 396
6   libdispatch.dylib             	       0x180191380 _dispatch_root_queue_drain_deferred_wlh + 288
7   libdispatch.dylib             	       0x1801909f4 _dispatch_workloop_worker_thread + 440
8   libsystem_pthread.dylib       	       0x10adb2bcc _pthread_wqthread + 288
9   libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 3:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 4:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 5:: com.apple.uikit.eventfetch-thread
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   Foundation                    	       0x180f0e38c -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 208
8   Foundation                    	       0x180f0e5ac -[NSRunLoop(NSRunLoop) runUntilDate:] + 60
9   UIKitCore                     	       0x185d07390 -[UIEventFetcher threadMain] + 408
10  Foundation                    	       0x180f35148 __NSThread__start__ + 716
11  libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
12  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 6:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 7::  Dispatch queue: com.apple.root.background-qos
0   libswiftCore.dylib            	       0x195acf4c4 swift_conformsToProtocolMaybeInstantiateSuperclasses(swift::TargetMetadata<swift::InProcess> const*, swift::TargetProtocolDescriptor<swift::InProcess> const*, bool)::$_1::operator()((anonymous namespace)::ConformanceSection const&) const::'lambda'(swift::TargetProtocolConformanceDescriptor<swift::InProcess> const&)::operator()(swift::TargetProtocolConformanceDescriptor<swift::InProcess> const&) const + 68
1   libswiftCore.dylib            	       0x195ace838 swift_conformsToProtocolMaybeInstantiateSuperclasses(swift::TargetMetadata<swift::InProcess> const*, swift::TargetProtocolDescriptor<swift::InProcess> const*, bool) + 2716
2   libswiftCore.dylib            	       0x195acce30 swift_conformsToProtocol2 + 52
3   Foundation                    	       0x180bac610 specialized JSONDecoderImpl.unwrap<A, B>(_:as:for:_:) + 164
4   Foundation                    	       0x180bc8cac partial apply for closure #1 in JSONDecoder.decode<A>(_:from:) + 80
5   Foundation                    	       0x180bae120 closure #1 in JSONDecoder._decode<A>(_:from:) + 2188
6   Foundation                    	       0x180bc8cd0 partial apply for closure #1 in JSONDecoder._decode<A>(_:from:) + 20
7   Foundation                    	       0x180bae250 closure #1 in static JSONDecoder.withUTF8Representation<A>(of:_:) + 100
8   Foundation                    	       0x180bc8cec partial apply for closure #1 in static JSONDecoder.withUTF8Representation<A>(of:_:) + 20
9   Foundation                    	       0x180ba4e80 closure #1 in Data.withBufferView<A>(_:) + 32
10  Foundation                    	       0x180bc8d08 partial apply for closure #1 in Data.withBufferView<A>(_:) + 20
11  Foundation                    	       0x180b0caa0 __DataStorage.withUnsafeBytes<A>(in:apply:) + 80
12  Foundation                    	       0x180b12b74 Data._Representation.withUnsafeBytes<A>(_:) + 340
13  Foundation                    	       0x180bac240 JSONDecoder.decode<A>(_:from:) + 228
14  Foundation                    	       0x180bc92dc dispatch thunk of JSONDecoder.decode<A>(_:from:) + 20
15  Expo Go                       	       0x105514f7c SettingsCache.cacheKey.getter + 320
16  Expo Go                       	       0x105511374 RemoteSettings.isCacheExpired(time:) + 196
17  Expo Go                       	       0x105510f9c RemoteSettings.fetchAndCacheSettings(currentTime:) + 200
18  Expo Go                       	       0x10550c73c closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:) + 540
19  Expo Go                       	       0x10550f93c partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:) + 24
20  Expo Go                       	       0x10550f810 partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:) + 12
21  Expo Go                       	       0x10550f960 partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:) + 12
22  Expo Go                       	       0x1055611b0 closure #1 in Promise.then(on:_:) + 220
23  Expo Go                       	       0x105560b38 thunk for @escaping @callee_guaranteed (@guaranteed Swift.AnyObject?) -> (@out Any?) + 56
24  Expo Go                       	       0x10555425c __56-[FBLPromise chainOnQueue:chainedFulfill:chainedReject:]_block_invoke.18 + 52
25  libdispatch.dylib             	       0x18017c788 _dispatch_call_block_and_release + 24
26  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
27  libdispatch.dylib             	       0x1801b23b0 <deduplicated_symbol> + 60
28  libdispatch.dylib             	       0x18018fc10 _dispatch_root_queue_drain + 916
29  libdispatch.dylib             	       0x1801903b4 _dispatch_worker_thread2 + 232
30  libsystem_pthread.dylib       	       0x10adb2b90 _pthread_wqthread + 228
31  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 8:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 9:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 10:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 11:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 12:: com.google.firebase.crashlytics.MachExceptionServer
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   Expo Go                       	       0x1054e7068 FIRCLSMachExceptionServer + 104
5   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
6   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 13:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 14:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 15:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 16:: com.facebook.react.runtime.JavaScript
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   Expo Go                       	       0x10595c3c8 +[RCTJSThreadManager runRunLoop] + 212
8   Foundation                    	       0x180f35148 __NSThread__start__ + 716
9   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
10  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 17:: hades
0   libsystem_kernel.dylib        	       0x10ae60014 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x10adb6ab8 _pthread_cond_wait + 976
2   libc++.1.dylib                	       0x18030c358 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 28
3   hermes                        	       0x10bb7c2a0 hermes::vm::HadesGC::Executor::worker() + 104
4   hermes                        	       0x10bb7c214 void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*) + 44
5   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
6   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 18:: AXSpeech
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   Foundation                    	       0x180f0e38c -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 208
8   TextToSpeech                  	       0x1b6c370f8 0x1b6c0d000 + 172280
9   Foundation                    	       0x180f35148 __NSThread__start__ + 716
10  libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
11  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 19:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 20:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 21:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 22:: caulk.messenger.shared:17
0   libsystem_kernel.dylib        	       0x10ae5caec semaphore_wait_trap + 8
1   caulk                         	       0x1b6b51b3c caulk::semaphore::timed_wait(double) + 220
2   caulk                         	       0x1b6b58c40 caulk::concurrent::details::worker_thread::run() + 28
3   caulk                         	       0x1b6b58cb4 void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 48
4   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
5   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 23:: caulk.messenger.shared:high
0   libsystem_kernel.dylib        	       0x10ae5caec semaphore_wait_trap + 8
1   caulk                         	       0x1b6b51b3c caulk::semaphore::timed_wait(double) + 220
2   caulk                         	       0x1b6b58c40 caulk::concurrent::details::worker_thread::run() + 28
3   caulk                         	       0x1b6b58cb4 void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 48
4   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
5   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 24:: hades
0   libsystem_kernel.dylib        	       0x10ae60014 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x10adb6ab8 _pthread_cond_wait + 976
2   libc++.1.dylib                	       0x18030c358 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 28
3   hermes                        	       0x10bb7c2a0 hermes::vm::HadesGC::Executor::worker() + 104
4   hermes                        	       0x10bb7c214 void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*) + 44
5   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
6   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 25:: com.apple.NSURLConnectionLoader
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   CFNetwork                     	       0x184b2a0f0 +[__CFN_CoreSchedulingSetRunnable _run:] + 368
8   Foundation                    	       0x180f35148 __NSThread__start__ + 716
9   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
10  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 26:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 27:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 28:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 29::  Dispatch queue: com.apple.CFNetwork.CacheDB-write
0   libsystem_platform.dylib      	       0x10abc4790 os_unfair_lock_unlock + 12
1   CoreFoundation                	       0x1804faf8c CFBasicHashGetPtrIndex + 268
2   CoreFoundation                	       0x1804fae28 CFBasicHashCreate + 512
3   CoreFoundation                	       0x1803ae84c __CFBinaryPlistWriteOrPresize + 116
4   CoreFoundation                	       0x18041aea0 CFPropertyListWrite + 324
5   CoreFoundation                	       0x18041aca4 CFPropertyListCreateData + 208
6   CFNetwork                     	       0x184980348 invocation function for block in __CFURLCache::CreateAndStoreCacheNode(__CFURLCacheNode*, _CFCachedURLResponse const*, __CFString const*, _CFURLRequest const*, void const*, bool, bool&) + 1276
7   libdispatch.dylib             	       0x18018c9cc _dispatch_block_async_invoke2 + 104
8   libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
9   libdispatch.dylib             	       0x180185ad0 _dispatch_lane_serial_drain + 984
10  libdispatch.dylib             	       0x180186590 _dispatch_lane_invoke + 396
11  libdispatch.dylib             	       0x180191380 _dispatch_root_queue_drain_deferred_wlh + 288
12  libdispatch.dylib             	       0x1801909f4 _dispatch_workloop_worker_thread + 440
13  libsystem_pthread.dylib       	       0x10adb2bcc _pthread_wqthread + 288
14  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 30:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 31:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 32:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 33:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 34:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 35::  Dispatch queue: com.apple.CFNetwork.Connection
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   libxpc.dylib                  	       0x1800e3760 _xpc_pipe_mach_msg + 52
5   libxpc.dylib                  	       0x1800e3168 _xpc_send_serializer + 104
6   libxpc.dylib                  	       0x1800e2f30 _xpc_pipe_simpleroutine + 136
7   libsystem_trace.dylib         	       0x1800a9118 ___os_activity_stream_reflect_block_invoke_3 + 36
8   libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
9   libdispatch.dylib             	       0x180181a30 _dispatch_block_invoke_direct + 376
10  libdispatch.dylib             	       0x1801818a8 dispatch_block_perform + 116
11  libsystem_trace.dylib         	       0x1800a8aac _os_activity_stream_reflect + 692
12  libsystem_trace.dylib         	       0x1800b7298 _os_log_impl_stream + 536
13  libsystem_trace.dylib         	       0x1800b6cc8 _os_log_impl_flatten_and_send + 8272
14  libsystem_trace.dylib         	       0x1800b4c60 _os_log + 164
15  libsystem_trace.dylib         	       0x1800b78d8 _os_log_impl + 20
16  Network                       	       0x188064088 nw_flow_disconnected(nw_protocol*, nw_protocol*) + 1412
17  Network                       	       0x187fb5520 __nw_protocol_instance_report_done_block_invoke + 428
18  Network                       	       0x1885f1bd8 nw_hash_table_apply + 2808
19  Network                       	       0x187fb4344 nw_protocol_instance_report_done + 320
20  libquic.dylib                 	       0x249afd77c quic_conn_drain + 2756
21  libquic.dylib                 	       0x249ad08f4 quic_conn_close + 2844
22  libquic.dylib                 	       0x249acfdcc __quic_conn_set_metadata_handlers_block_invoke_2.40 + 72
23  Network                       	       0x1885ebaa0 nw_queue_context_async_if_needed + 84
24  Network                       	       0x187fbe680 nw_protocol_instance_async_if_needed + 84
25  libquic.dylib                 	       0x249acfd78 __quic_conn_set_metadata_handlers_block_invoke.39 + 116
26  Network                       	       0x188539098 __nw_quic_connection_close_with_error_block_invoke + 48
27  Network                       	       0x188538e00 nw_quic_connection_close_with_error + 120
28  CFNetwork                     	       0x1849ac1dc NWIOConnection::closeWithQUICApplicationError(unsigned long long) + 64
29  CFNetwork                     	       0x1849e0e3c HTTP3Connection::_cleanupConnection(H3::ErrorCode, bool) + 188
30  libdispatch.dylib             	       0x18017c788 _dispatch_call_block_and_release + 24
31  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
32  libdispatch.dylib             	       0x180185ad0 _dispatch_lane_serial_drain + 984
33  libdispatch.dylib             	       0x180186590 _dispatch_lane_invoke + 396
34  libdispatch.dylib             	       0x180187220 _dispatch_workloop_invoke + 704
35  libdispatch.dylib             	       0x180191380 _dispatch_root_queue_drain_deferred_wlh + 288
36  libdispatch.dylib             	       0x1801909f4 _dispatch_workloop_worker_thread + 440
37  libsystem_pthread.dylib       	       0x10adb2bcc _pthread_wqthread + 288
38  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 36:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 37:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 38::  Dispatch queue: NSOperationQueue 0x10b204200 (QOS: UNSPECIFIED)
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   libxpc.dylib                  	       0x1800e3760 _xpc_pipe_mach_msg + 52
5   libxpc.dylib                  	       0x1800e3168 _xpc_send_serializer + 104
6   libxpc.dylib                  	       0x1800e2f30 _xpc_pipe_simpleroutine + 136
7   libsystem_trace.dylib         	       0x1800a9118 ___os_activity_stream_reflect_block_invoke_3 + 36
8   libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
9   libdispatch.dylib             	       0x180181a30 _dispatch_block_invoke_direct + 376
10  libdispatch.dylib             	       0x1801818a8 dispatch_block_perform + 116
11  libsystem_trace.dylib         	       0x1800a8aac _os_activity_stream_reflect + 692
12  libsystem_trace.dylib         	       0x1800b7298 _os_log_impl_stream + 536
13  libsystem_trace.dylib         	       0x1800b6cc8 _os_log_impl_flatten_and_send + 8272
14  libsystem_trace.dylib         	       0x1800b4c60 _os_log + 164
15  libsystem_trace.dylib         	       0x1800b78d8 _os_log_impl + 20
16  UIKitCore                     	       0x185740688 _UIApplicationBeginBackgroundTaskWithExpirationHandler + 336
17  Expo Go                       	       0x105535d84 -[GDTCORApplication beginBackgroundTaskWithName:expirationHandler:] + 96
18  Expo Go                       	       0x105528420 -[GDTCCTUploadOperation uploadTarget:withConditions:] + 240
19  Foundation                    	       0x180edb14c __NSOPERATIONQUEUE_IS_STARTING_AN_OPERATION__ + 12
20  Foundation                    	       0x180edae64 __NSOQSchedule_f + 160
21  libdispatch.dylib             	       0x18018c9cc _dispatch_block_async_invoke2 + 104
22  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
23  libdispatch.dylib             	       0x180181498 _dispatch_continuation_pop + 776
24  libdispatch.dylib             	       0x1801806b0 _dispatch_async_redirect_invoke + 852
25  libdispatch.dylib             	       0x18018f9cc _dispatch_root_queue_drain + 336
26  libdispatch.dylib             	       0x1801903b4 _dispatch_worker_thread2 + 232
27  libsystem_pthread.dylib       	       0x10adb2b90 _pthread_wqthread + 228
28  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 39::  Dispatch queue: com.google.GDTCCTUploader
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   libxpc.dylib                  	       0x1800e3760 _xpc_pipe_mach_msg + 52
5   libxpc.dylib                  	       0x1800e3168 _xpc_send_serializer + 104
6   libxpc.dylib                  	       0x1800e2f30 _xpc_pipe_simpleroutine + 136
7   libsystem_trace.dylib         	       0x1800a9118 ___os_activity_stream_reflect_block_invoke_3 + 36
8   libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
9   libdispatch.dylib             	       0x180181a30 _dispatch_block_invoke_direct + 376
10  libdispatch.dylib             	       0x1801818a8 dispatch_block_perform + 116
11  libsystem_trace.dylib         	       0x1800a8aac _os_activity_stream_reflect + 692
12  libsystem_trace.dylib         	       0x1800b7298 _os_log_impl_stream + 536
13  libsystem_trace.dylib         	       0x1800b6cc8 _os_log_impl_flatten_and_send + 8272
14  libsystem_trace.dylib         	       0x1800b4c60 _os_log + 164
15  libsystem_trace.dylib         	       0x1800b78d8 _os_log_impl + 20
16  UIKitCore                     	       0x185740858 _UIApplicationEndBackgroundTask + 152
17  UIKitCore                     	       0x185c78ec8 -[UIApplication _endBackgroundTask:] + 24
18  Expo Go                       	       0x105535e30 -[GDTCORApplication endBackgroundTask:] + 116
19  Expo Go                       	       0x105528a80 __53-[GDTCCTUploadOperation uploadTarget:withConditions:]_block_invoke + 92
20  Expo Go                       	       0x105554c30 __46-[FBLPromise(AlwaysAdditions) onQueue:always:]_block_invoke.1 + 40
21  Expo Go                       	       0x1055542cc __56-[FBLPromise chainOnQueue:chainedFulfill:chainedReject:]_block_invoke.19 + 52
22  libdispatch.dylib             	       0x18017c788 _dispatch_call_block_and_release + 24
23  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
24  libdispatch.dylib             	       0x180185ba0 _dispatch_lane_serial_drain + 1192
25  libdispatch.dylib             	       0x180186590 _dispatch_lane_invoke + 396
26  libdispatch.dylib             	       0x180191380 _dispatch_root_queue_drain_deferred_wlh + 288
27  libdispatch.dylib             	       0x1801909f4 _dispatch_workloop_worker_thread + 440
28  libsystem_pthread.dylib       	       0x10adb2bcc _pthread_wqthread + 288
29  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 40::  Dispatch queue: com.google.fira.worker
0   libsystem_kernel.dylib        	       0x10ae602b4 fsync + 8
1   libsqlite3.dylib              	       0x182f06ee8 unixSync + 204
2   libsqlite3.dylib              	       0x182ee1600 sqlite3PagerCommitPhaseOne + 664
3   libsqlite3.dylib              	       0x182ee1924 sqlite3BtreeCommitPhaseOne + 156
4   libsqlite3.dylib              	       0x182f23ba0 vdbeCommit + 1128
5   libsqlite3.dylib              	       0x182f23124 sqlite3VdbeHalt + 1344
6   libsqlite3.dylib              	       0x182f331d4 sqlite3VdbeExec + 42308
7   libsqlite3.dylib              	       0x182ededb4 sqlite3_step + 936
8   Expo Go                       	       0x106a18c24 -[APMSqliteStore deleteRecordsFromTableWithName:condition:parameterValues:error:] + 244
9   Expo Go                       	       0x106990f80 -[APMDatabase deleteBundlesWithRowIDs:error:] + 100
10  Expo Go                       	       0x1069bfe1c -[APMMeasurement removeBundlesFromDatabaseWithIDs:] + 36
11  Expo Go                       	       0x1069ba2b8 -[APMMeasurement networkUploadCompletionHandlerWithResponse:error:] + 404
12  Expo Go                       	       0x1069b9d74 __28-[APMMeasurement uploadData]_block_invoke.689 + 84
13  libdispatch.dylib             	       0x18017c788 _dispatch_call_block_and_release + 24
14  libdispatch.dylib             	       0x180197278 _dispatch_client_callout + 12
15  libdispatch.dylib             	       0x180185ad0 _dispatch_lane_serial_drain + 984
16  libdispatch.dylib             	       0x180186590 _dispatch_lane_invoke + 396
17  libdispatch.dylib             	       0x180191380 _dispatch_root_queue_drain_deferred_wlh + 288
18  libdispatch.dylib             	       0x1801909f4 _dispatch_workloop_worker_thread + 440
19  libsystem_pthread.dylib       	       0x10adb2bcc _pthread_wqthread + 288
20  libsystem_pthread.dylib       	       0x10adb198c start_wqthread + 8

Thread 41:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 42:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 43:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 44:
0   libsystem_pthread.dylib       	       0x10adb1984 start_wqthread + 0

Thread 45:: com.facebook.react.runtime.JavaScript
0   libsystem_kernel.dylib        	       0x10ae5e770 __ulock_wait + 8
1   libdispatch.dylib             	       0x18017e590 _dlock_wait + 52
2   libdispatch.dylib             	       0x18017e39c _dispatch_thread_event_wait_slow + 52
3   libdispatch.dylib             	       0x18018d220 __DISPATCH_WAIT_FOR_QUEUE__ + 392
4   libdispatch.dylib             	       0x18018cd1c _dispatch_sync_f_slow + 160
5   Expo Go                       	       0x1057bd4a0 RCTUnsafeExecuteOnMainQueueSyncWithError + 284
6   Expo Go                       	       0x1058a9a08 -[RCTTurboModuleManager _provideObjCModule:moduleHolder:shouldPerfLog:moduleProvider:] + 492
7   Expo Go                       	       0x1058a978c -[RCTTurboModuleManager _provideObjCModule:moduleProvider:] + 228
8   Expo Go                       	       0x1058a9158 -[RCTTurboModuleManager _moduleProviderForName:] + 216
9   Expo Go                       	       0x1058a83f0 -[RCTTurboModuleManager provideTurboModule:runtime:] + 824
10  Expo Go                       	       0x1058ac120 std::__1::__function::__func<-[RCTTurboModuleManager installJSBindings:]::$_0, std::__1::allocator<-[RCTTurboModuleManager installJSBindings:]::$_0>, std::__1::shared_ptr<facebook::react::TurboModule> (std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&)>::operator()(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&) + 152
11  Expo Go                       	       0x105a16020 facebook::react::TurboModuleBinding::getModule(facebook::jsi::Runtime&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&) const + 116
12  Expo Go                       	       0x105a169d4 facebook::react::BridgelessNativeModuleProxy::get(facebook::jsi::Runtime&, facebook::jsi::PropNameID const&) + 156
13  hermes                        	       0x10ba61fd0 facebook::hermes::(anonymous namespace)::HermesRuntimeImpl::JsiProxy::get(hermes::vm::SymbolID) + 96
14  hermes                        	       0x10bc6f830 hermes::vm::JSObject::getComputedWithReceiver_RJS(hermes::vm::Handle<hermes::vm::JSObject>, hermes::vm::Runtime&, hermes::vm::Handle<hermes::vm::HermesValue>, hermes::vm::Handle<hermes::vm::HermesValue>) + 428
15  hermes                        	       0x10bb00800 hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&) + 3796
16  hermes                        	       0x10baff904 hermes::vm::Runtime::interpretFunctionImpl(hermes::vm::CodeBlock*) + 132
17  hermes                        	       0x10baeb710 hermes::vm::JSFunction::_callImpl(hermes::vm::Handle<hermes::vm::Callable>, hermes::vm::Runtime&) + 40
18  hermes                        	       0x10baeb214 hermes::vm::BoundFunction::_boundCall(hermes::vm::BoundFunction*, hermes::inst::Inst const*, hermes::vm::Runtime&) + 340
19  hermes                        	       0x10bafebec hermes::vm::Interpreter::handleCallSlowPath(hermes::vm::Runtime&, hermes::vm::PinnedHermesValue*) + 88
20  hermes                        	       0x10bb01d00 hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&) + 9172
21  hermes                        	       0x10baff904 hermes::vm::Runtime::interpretFunctionImpl(hermes::vm::CodeBlock*) + 132
22  hermes                        	       0x10baeb710 hermes::vm::JSFunction::_callImpl(hermes::vm::Handle<hermes::vm::Callable>, hermes::vm::Runtime&) + 40
23  hermes                        	       0x10baeb214 hermes::vm::BoundFunction::_boundCall(hermes::vm::BoundFunction*, hermes::inst::Inst const*, hermes::vm::Runtime&) + 340
24  hermes                        	       0x10ba5b2b0 facebook::hermes::(anonymous namespace)::HermesRuntimeImpl::call(facebook::jsi::Function const&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long) + 292
25  Expo Go                       	       0x1059d2168 facebook::react::Task::execute(facebook::jsi::Runtime&, bool) + 172
26  Expo Go                       	       0x1059cddf8 facebook::react::RuntimeScheduler_Modern::executeTask(facebook::jsi::Runtime&, facebook::react::Task&, bool) const + 132
27  Expo Go                       	       0x1059ce574 facebook::react::RuntimeScheduler_Modern::runEventLoopTick(facebook::jsi::Runtime&, facebook::react::Task&) + 176
28  Expo Go                       	       0x1059ce2d8 facebook::react::RuntimeScheduler_Modern::runEventLoop(facebook::jsi::Runtime&) + 120
29  Expo Go                       	       0x1059606f0 _ZNSt3__110__function6__funcIZZN8facebook5react13ReactInstanceC1ENS_10unique_ptrINS3_9JSRuntimeENS_14default_deleteIS6_EEEENS_10shared_ptrINS3_18MessageQueueThreadEEENSA_INS3_12TimerManagerEEENS_8functionIFvRNS2_3jsi7RuntimeERKNS3_14JsErrorHandler14ProcessedErrorEEEEPNS3_18jsinspector_modern10HostTargetEENK3$_0clINSF_IFvSI_EEEEEDaT_EUlvE_NS_9allocatorISY_EEFvvEEclEv + 140
30  Expo Go                       	       0x105780e48 facebook::react::tryAndReturnError(std::__1::function<void ()> const&) + 32
31  Expo Go                       	       0x10578fd30 facebook::react::RCTMessageThread::tryFunc(std::__1::function<void ()> const&) + 24
32  Expo Go                       	       0x10578fb3c invocation function for block in facebook::react::RCTMessageThread::runAsync(std::__1::function<void ()>) + 44
33  CoreFoundation                	       0x180429134 __CFRUNLOOP_IS_CALLING_OUT_TO_A_BLOCK__ + 20
34  CoreFoundation                	       0x180428898 __CFRunLoopDoBlocks + 348
35  CoreFoundation                	       0x180423a2c __CFRunLoopRun + 2308
36  CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
37  Expo Go                       	       0x10595c3c8 +[RCTJSThreadManager runRunLoop] + 212
38  Foundation                    	       0x180f35148 __NSThread__start__ + 716
39  libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
40  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 46:: hades
0   libsystem_kernel.dylib        	       0x10ae60014 __psynch_cvwait + 8
1   libsystem_pthread.dylib       	       0x10adb6ab8 _pthread_cond_wait + 976
2   libc++.1.dylib                	       0x18030c358 std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 28
3   hermes                        	       0x10bb7c2a0 hermes::vm::HadesGC::Executor::worker() + 104
4   hermes                        	       0x10bb7c214 void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*) + 44
5   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
6   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 47:: com.facebook.SocketRocket.NetworkThread
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   Foundation                    	       0x180f0e38c -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 208
8   Expo Go                       	       0x105a50c10 -[SRRunLoopThread main] + 224
9   Foundation                    	       0x180f35148 __NSThread__start__ + 716
10  libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
11  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 48:: com.apple.CFStream.LegacyThread
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   CoreFoundation                	       0x180446fdc _legacyStreamRunLoop_workThread + 260
8   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
9   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 49:: com.apple.CFSocket.private
0   libsystem_kernel.dylib        	       0x10ae66f98 __select + 8
1   CoreFoundation                	       0x1804377a4 __CFSocketManager + 680
2   libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
3   libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8

Thread 50:: AXSpeech
0   libsystem_kernel.dylib        	       0x10ae5cb70 mach_msg2_trap + 8
1   libsystem_kernel.dylib        	       0x10ae6dfac mach_msg2_internal + 72
2   libsystem_kernel.dylib        	       0x10ae64c28 mach_msg_overwrite + 480
3   libsystem_kernel.dylib        	       0x10ae5ced8 mach_msg + 20
4   CoreFoundation                	       0x180428bc4 __CFRunLoopServiceMachPort + 156
5   CoreFoundation                	       0x1804235a4 __CFRunLoopRun + 1148
6   CoreFoundation                	       0x180422cec CFRunLoopRunSpecific + 536
7   Foundation                    	       0x180f0e38c -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 208
8   TextToSpeech                  	       0x1b6c370f8 0x1b6c0d000 + 172280
9   Foundation                    	       0x180f35148 __NSThread__start__ + 716
10  libsystem_pthread.dylib       	       0x10adb65f0 _pthread_start + 104
11  libsystem_pthread.dylib       	       0x10adb1998 thread_start + 8


Thread 0 crashed with ARM Thread State (64-bit):
    x0: 0x0000000000000000   x1: 0x0000000000000000   x2: 0x0000000000000000   x3: 0x0000000000000000
    x4: 0x0000000000000000   x5: 0x0000000000989680   x6: 0x0000000000000020   x7: 0x0000000000000000
    x8: 0x000000010ac8c200   x9: 0x0435181e38a03bd6  x10: 0x00000000000003e8  x11: 0x3d656c69666f7250
   x12: 0x3d656c69666f7250  x13: 0x732d73656d726568  x14: 0x37313a656c626174  x15: 0x2934353a36343531
   x16: 0x0000000000000148  x17: 0x0000000000000048  x18: 0x0000000000000000  x19: 0x0000000000000006
   x20: 0x0000000000000103  x21: 0x000000010ac8c2e0  x22: 0x0000000000000001  x23: 0x000000010706c99c
   x24: 0x0000000000000000  x25: 0x0000000000000000  x26: 0x0000000000000000  x27: 0x0000000000000000
   x28: 0x0000000000000114   fp: 0x000000016ae04bb0   lr: 0x000000010adb62ec
    sp: 0x000000016ae04b90   pc: 0x000000010ae64874 cpsr: 0x40001000
   far: 0x0000000000000000  esr: 0x56000080  Address size fault

Binary Images:
       0x10abe4000 -        0x10ac7ffff dyld (*) <3247e185-ced2-36ff-9e29-47a77c23e004> /usr/lib/dyld
       0x104ff8000 -        0x107797fff host.exp.Exponent (54.0.6) <feca2dde-f779-3952-b492-3020fe2747fc> /Users/USER/Library/Developer/CoreSimulator/Devices/29237E46-92B3-413F-94A4-ABCAEF3628D6/data/Containers/Bundle/Application/145D204B-85A1-494A-ABED-2BBA7856D5E4/Expo-Go-54.0.6.tar.app/Expo Go
       0x10ba50000 -        0x10bce3fff dev.hermesengine.iphonesimulator (0.12.0) <a918e708-284a-3dc7-8b99-c31ee9bab970> /Users/USER/Library/Developer/CoreSimulator/Devices/29237E46-92B3-413F-94A4-ABCAEF3628D6/data/Containers/Bundle/Application/145D204B-85A1-494A-ABED-2BBA7856D5E4/Expo-Go-54.0.6.tar.app/Frameworks/hermes.framework/hermes
       0x10abc4000 -        0x10abcbfff libsystem_platform.dylib (*) <43ef9892-7edb-34c5-88d6-2c79fa2e7bd3> /usr/lib/system/libsystem_platform.dylib
       0x10ae5c000 -        0x10ae97fff libsystem_kernel.dylib (*) <0960cf7e-fb2e-3068-998e-131a316ed666> /usr/lib/system/libsystem_kernel.dylib
       0x10adb0000 -        0x10adbffff libsystem_pthread.dylib (*) <421e2342-6729-3a9f-a439-29ad130875b3> /usr/lib/system/libsystem_pthread.dylib
       0x10b014000 -        0x10b01ffff libobjc-trampolines.dylib (*) <56878cbd-4b61-3d67-a830-23a1b2beaf59> /Volumes/VOLUME/*/libobjc-trampolines.dylib
       0x1800fe000 -        0x18017a79b libsystem_c.dylib (*) <d8eab09a-74cb-346d-b14e-3187db1c40db> /Volumes/VOLUME/*/libsystem_c.dylib
       0x18029b000 -        0x1802b6fff libc++abi.dylib (*) <649076f2-9c2b-3e8e-833b-d246ac43869e> /Volumes/VOLUME/*/libc++abi.dylib
       0x180068000 -        0x1800a491f libobjc.A.dylib (*) <b10e226d-4fab-3450-9a4c-071d3d0edf3a> /Volumes/VOLUME/*/libobjc.A.dylib
       0x18017b000 -        0x1801bfb9f libdispatch.dylib (*) <990151a6-fd18-3496-84e3-f565307fbc2f> /Volumes/VOLUME/*/libdispatch.dylib
       0x180396000 -        0x1807adfff com.apple.CoreFoundation (6.9) <ae27f481-c1fa-359c-b04c-af9cda7655ff> /Volumes/VOLUME/*/CoreFoundation.framework/CoreFoundation
       0x191002000 -        0x19100a1ff com.apple.GraphicsServices (1.0) <80b30bb2-e6e1-317e-b798-ea590de713a8> /Volumes/VOLUME/*/GraphicsServices.framework/GraphicsServices
       0x184dfb000 -        0x186b672bf com.apple.UIKitCore (1.0) <f5406608-aa34-30ba-8494-0a8b531792f5> /Volumes/VOLUME/*/UIKitCore.framework/UIKitCore
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
       0x18082d000 -        0x1813dce3f com.apple.Foundation (6.9) <48eb0271-c8d1-359a-bd56-bcf3e7e37dc5> /Volumes/VOLUME/*/Foundation.framework/Foundation
       0x1957bb000 -        0x195c3e3df libswiftCore.dylib (*) <0c2ad407-9c4e-364d-b9a4-fc4560142a64> /Volumes/VOLUME/*/libswiftCore.dylib
       0x243640000 -        0x244300d9f com.apple.vfx (16.0) <89c56423-fb99-302a-9014-11dc4e61ace9> /Volumes/VOLUME/*/VFX.framework/VFX
       0x1800a5000 -        0x1800be21f libsystem_trace.dylib (*) <ca18d463-4b64-30c3-a144-c6b4dad25e15> /Volumes/VOLUME/*/libsystem_trace.dylib
       0x1802ec000 -        0x180370ffb libc++.1.dylib (*) <b81f25b5-2a12-36cd-84e2-b8c80df7d07b> /Volumes/VOLUME/*/libc++.1.dylib
       0x1b6c0d000 -        0x1b6de2fdf com.apple.texttospeech (1.0.0) <a1620dc8-7943-3238-9daa-dc6d73391990> /Volumes/VOLUME/*/TextToSpeech.framework/TextToSpeech
       0x1b6b42000 -        0x1b6b675df com.apple.audio.caulk (1.0) <7f22c3c4-1a93-34dd-bf46-522f8d2a0e77> /Volumes/VOLUME/*/caulk.framework/caulk
       0x184922000 -        0x184ca399f com.apple.CFNetwork (1.0) <a726149c-9657-391f-bfdd-fd9ed415d3cc> /Volumes/VOLUME/*/CFNetwork.framework/CFNetwork
       0x1800bf000 -        0x1800faa9f libxpc.dylib (*) <021c0bf8-edd4-395a-b281-2cc7a26f742f> /Volumes/VOLUME/*/libxpc.dylib
       0x187d3a000 -        0x188bbd1bf com.apple.Network (1.0) <c8ee496f-c2b0-3b8d-83a7-85ac5926ac2f> /Volumes/VOLUME/*/Network.framework/Network
       0x24995d000 -        0x249b606bf libquic.dylib (*) <22384c0e-af0d-34d4-b379-20bd79829b59> /Volumes/VOLUME/*/libquic.dylib
       0x182ed1000 -        0x18304bedf libsqlite3.dylib (*) <980ccbb2-c062-3209-9abe-a316f748abd0> /Volumes/VOLUME/*/libsqlite3.dylib
       0x1800fb000 -        0x1800fdda8 libsystem_blocks.dylib (*) <c4bd1236-39b0-3bae-9cab-5a79157d4a8f> /Volumes/VOLUME/*/libsystem_blocks.dylib

EOF

-----------
Full Report
-----------

{"app_name":"Expo Go","timestamp":"2026-01-01 16:03:02.00 +0300","app_version":"54.0.6","slice_uuid":"feca2dde-f779-3952-b492-3020fe2747fc","build_version":"54.0.6","platform":7,"bundleID":"host.exp.Exponent","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 15.6.1 (24G90)","roots_installed":0,"name":"Expo Go","incident_id":"D1D00D4A-88A7-44F7-88F6-36EF4EF92D8A"}
{
  "uptime" : 580000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "Mac14,2",
  "coalitionID" : 108241,
  "osVersion" : {
    "train" : "macOS 15.6.1",
    "build" : "24G90",
    "releaseType" : "User"
  },
  "captureTime" : "2026-01-01 16:02:59.5392 +0300",
  "codeSigningMonitor" : 1,
  "incident" : "D1D00D4A-88A7-44F7-88F6-36EF4EF92D8A",
  "pid" : 80357,
  "translated" : false,
  "cpuType" : "ARM-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2026-01-01 16:02:53.7306 +0300",
  "procStartAbsTime" : 13993768245077,
  "procExitAbsTime" : 13993907557185,
  "procName" : "Expo Go",
  "procPath" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/29237E46-92B3-413F-94A4-ABCAEF3628D6\/data\/Containers\/Bundle\/Application\/145D204B-85A1-494A-ABED-2BBA7856D5E4\/Expo-Go-54.0.6.tar.app\/Expo Go",
  "bundleInfo" : {"CFBundleShortVersionString":"54.0.6","CFBundleVersion":"54.0.6","CFBundleIdentifier":"host.exp.Exponent"},
  "storeInfo" : {"deviceIdentifierForVendor":"31D9D3A4-5735-5445-8928-13C6BBD7F5A7","thirdParty":true},
  "parentProc" : "launchd_sim",
  "parentPid" : 80106,
  "coalitionName" : "com.apple.CoreSimulator.SimDevice.29237E46-92B3-413F-94A4-ABCAEF3628D6",
  "crashReporterKey" : "F0353C10-1526-5869-4A78-A2D2237134E3",
  "appleIntelligenceStatus" : {"reasons":["assetIsNotReady","siriAssetIsNotReady","notOptedIn"],"state":"unavailable"},
  "responsiblePid" : 25429,
  "responsibleProc" : "SimulatorTrampoline",
  "codeSigningID" : "host.exp.Exponent",
  "codeSigningTeamID" : "",
  "codeSigningFlags" : 570425857,
  "codeSigningValidationCategory" : 10,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "instructionByteStream" : {"beforePC":"4wAAVP17v6n9AwCRIOP\/l78DAJH9e8GowANf1sADX9YQKYDSARAA1A==","atPC":"4wAAVP17v6n9AwCRFuP\/l78DAJH9e8GowANf1sADX9ZwCoDSARAA1A=="},
  "bootSessionUUID" : "ED920C53-3714-4D82-ACB7-14E35E3A206E",
  "wakeTime" : 14828,
  "sleepWakeUUID" : "4517E120-7FB7-4F36-AD0D-2D07EAE2C726",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000000, 0x0000000000000000","rawCodes":[0,0],"type":"EXC_CRASH","signal":"SIGABRT"},
  "termination" : {"flags":0,"code":6,"namespace":"SIGNAL","indicator":"Abort trap: 6","byProc":"Expo Go","byPid":80357},
  "ktriageinfo" : "VM - (arg = 0x3) mach_vm_allocate_kernel failed within call to vm_map_enter\n",
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 0,
  "threads" : [{"triggered":true,"id":15161142,"threadState":{"x":[{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":10000000},{"value":32},{"value":0},{"value":4475896320,"symbolLocation":0,"symbol":"_main_thread"},{"value":303175067995487190},{"value":1000},{"value":4424061408907326032},{"value":4424061408907326032},{"value":8299416567778796904},{"value":3977024153229353332},{"value":2969056578477765937},{"value":328},{"value":72},{"value":0},{"value":6},{"value":259},{"value":4475896544,"symbolLocation":224,"symbol":"_main_thread"},{"value":1},{"value":4412852636,"symbolLocation":10060,"symbol":"FIRCLSHexMap"},{"value":0},{"value":0},{"value":0},{"value":0},{"value":276}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477117164},"cpsr":{"value":1073745920},"fp":{"value":6088051632},"sp":{"value":6088051600},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477831284,"matchesCrashFrame":1},"far":{"value":0}},"queue":"com.apple.main-thread","frames":[{"imageOffset":34932,"symbol":"__pthread_kill","symbolLocation":8,"imageIndex":4},{"imageOffset":25324,"symbol":"pthread_kill","symbolLocation":264,"imageIndex":5},{"imageOffset":474912,"symbol":"__abort","symbolLocation":108,"imageIndex":7},{"imageOffset":474804,"symbol":"abort","symbolLocation":112,"imageIndex":7},{"imageOffset":86340,"symbol":"abort_message","symbolLocation":128,"imageIndex":8},{"imageOffset":20016,"symbol":"demangling_terminate_handler()","symbolLocation":268,"imageIndex":8},{"imageOffset":29232,"symbol":"_objc_terminate()","symbolLocation":140,"imageIndex":9},{"imageOffset":5137160,"symbol":"FIRCLSTerminateHandler()","symbolLocation":332,"imageIndex":1},{"imageOffset":83312,"symbol":"std::__terminate(void (*)())","symbolLocation":12,"imageIndex":8},{"imageOffset":95880,"symbol":"__cxa_rethrow","symbolLocation":128,"imageIndex":8},{"imageOffset":178528,"symbol":"objc_exception_rethrow","symbolLocation":40,"imageIndex":9},{"imageOffset":9088436,"symbol":"invocation function for block in facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*)","symbolLocation":200,"imageIndex":1},{"imageOffset":9107568,"symbol":"std::__1::__function::__func<facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*)::$_1, std::__1::allocator<facebook::react::ObjCTurboModule::performVoidMethodInvocation(facebook::jsi::Runtime&, char const*, NSInvocation*, NSMutableArray*)::$_1>, void ()>::operator()()","symbolLocation":104,"imageIndex":1},{"imageOffset":6024,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":229388,"symbol":"<deduplicated_symbol>","symbolLocation":24,"imageIndex":10},{"imageOffset":70084,"symbol":"_dispatch_main_queue_drain","symbolLocation":1184,"imageIndex":10},{"imageOffset":68884,"symbol":"_dispatch_main_queue_callback_4CF","symbolLocation":40,"imageIndex":10},{"imageOffset":601756,"symbol":"__CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__","symbolLocation":12,"imageIndex":11},{"imageOffset":579752,"symbol":"__CFRunLoopRun","symbolLocation":1920,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":11520,"symbol":"GSEventRunModal","symbolLocation":164,"imageIndex":12},{"imageOffset":15067092,"symbol":"-[UIApplication _run]","symbolLocation":796,"imageIndex":13},{"imageOffset":15084448,"symbol":"UIApplicationMain","symbolLocation":124,"imageIndex":13},{"imageOffset":246820,"symbol":"main","symbolLocation":64,"imageIndex":1},{"imageOffset":4474311636,"imageIndex":14},{"imageOffset":27544,"symbol":"start","symbolLocation":6076,"imageIndex":0}]},{"id":15161178,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6088617984},{"value":2563},{"value":6088081408},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6088617984},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161179,"threadState":{"x":[{"value":105553159953744},{"value":0},{"value":0},{"value":105553162476928},{"value":105553160001664},{"value":32},{"value":0},{"value":0},{"value":3512316172},{"value":3512316172},{"value":255},{"value":50331648},{"value":105553163190072},{"value":1},{"value":27021597764222976},{"value":6444253392,"symbolLocation":480,"symbol":"_dispatch_sigsuspend.mask"},{"value":4477098504,"symbolLocation":0,"symbol":"pthread_getspecific"},{"value":27021610649130497},{"value":0},{"value":105553159953744},{"value":0},{"value":1},{"value":105553159953776},{"value":0},{"value":1279},{"value":1279},{"value":0},{"value":1279},{"value":304}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6444118648},"cpsr":{"value":1610616832},"fp":{"value":6089189200},"sp":{"value":6089189168},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":6444075452},"far":{"value":0}},"queue":"APMPersistedConfig","frames":[{"imageOffset":72124,"symbol":"_dispatch_block_async_invoke2","symbolLocation":88,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":25752,"symbol":"_dispatch_continuation_pop","symbolLocation":776,"imageIndex":10},{"imageOffset":103400,"symbol":"_dispatch_source_invoke","symbolLocation":1808,"imageIndex":10},{"imageOffset":43048,"symbol":"_dispatch_lane_serial_drain","symbolLocation":304,"imageIndex":10},{"imageOffset":46480,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":10},{"imageOffset":91008,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":10},{"imageOffset":88564,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":440,"imageIndex":10},{"imageOffset":11212,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161180,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6089764864},{"value":4867},{"value":6089228288},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6089764864},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161182,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6090338304},{"value":9731},{"value":6089801728},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6090338304},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161183,"name":"com.apple.uikit.eventfetch-thread","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":65983582568448},{"value":4294967295},{"value":65983582568448},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":15363},{"value":3072},{"value":18446744073709551569},{"value":2334332923},{"value":0},{"value":4294967295},{"value":2},{"value":65983582568448},{"value":4294967295},{"value":65983582568448},{"value":6090907016},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6090906864},"sp":{"value":6090906784},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":7213964,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":208,"imageIndex":15},{"imageOffset":7214508,"symbol":"-[NSRunLoop(NSRunLoop) runUntilDate:]","symbolLocation":60,"imageIndex":15},{"imageOffset":15778704,"symbol":"-[UIEventFetcher threadMain]","symbolLocation":408,"imageIndex":13},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161184,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6091485184},{"value":13571},{"value":6090948608},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6091485184},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161185,"threadState":{"x":[{"value":6092054880},{"value":9731782768,"symbolLocation":134256,"symbol":"VFXNullBoundingBox"},{"value":0},{"value":0},{"value":6462508340,"symbolLocation":0,"symbol":"protocol descriptor for _JSONStringDictionaryDecodableMarker"},{"value":4474442740},{"value":0},{"value":0},{"value":6807483316,"symbolLocation":0,"symbol":"protocol descriptor for CustomDebugStringConvertible"},{"value":151333145},{"value":4522081280},{"value":24},{"value":1030},{"value":0},{"value":4425139352,"symbolLocation":0,"symbol":"type metadata for CacheKey"},{"value":3198230742},{"value":6443189324,"symbolLocation":0,"symbol":"os_signpost_enabled"},{"value":3200325849},{"value":0},{"value":6092054880},{"value":9731782768,"symbolLocation":134256,"symbol":"VFXNullBoundingBox"},{"value":9733132540},{"value":4504796184},{"value":9733113764},{"value":6092054784},{"value":6092054775},{"value":8376115048,"symbolLocation":0,"symbol":"Conformances"},{"value":6092054760},{"value":6092054800}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6806104120},"cpsr":{"value":2147487744},"fp":{"value":6092054640},"sp":{"value":6092054544},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":6806107332},"far":{"value":0}},"queue":"com.apple.root.background-qos","frames":[{"imageOffset":3228868,"symbol":"swift_conformsToProtocolMaybeInstantiateSuperclasses(swift::TargetMetadata<swift::InProcess> const*, swift::TargetProtocolDescriptor<swift::InProcess> const*, bool)::$_1::operator()((anonymous namespace)::ConformanceSection const&) const::'lambda'(swift::TargetProtocolConformanceDescriptor<swift::InProcess> const&)::operator()(swift::TargetProtocolConformanceDescriptor<swift::InProcess> const&) const","symbolLocation":68,"imageIndex":16},{"imageOffset":3225656,"symbol":"swift_conformsToProtocolMaybeInstantiateSuperclasses(swift::TargetMetadata<swift::InProcess> const*, swift::TargetProtocolDescriptor<swift::InProcess> const*, bool)","symbolLocation":2716,"imageIndex":16},{"imageOffset":3218992,"symbol":"swift_conformsToProtocol2","symbolLocation":52,"imageIndex":16},{"imageOffset":3667472,"symbol":"specialized JSONDecoderImpl.unwrap<A, B>(_:as:for:_:)","symbolLocation":164,"imageIndex":15},{"imageOffset":3783852,"symbol":"partial apply for closure #1 in JSONDecoder.decode<A>(_:from:)","symbolLocation":80,"imageIndex":15},{"imageOffset":3674400,"symbol":"closure #1 in JSONDecoder._decode<A>(_:from:)","symbolLocation":2188,"imageIndex":15},{"imageOffset":3783888,"symbol":"partial apply for closure #1 in JSONDecoder._decode<A>(_:from:)","symbolLocation":20,"imageIndex":15},{"imageOffset":3674704,"symbol":"closure #1 in static JSONDecoder.withUTF8Representation<A>(of:_:)","symbolLocation":100,"imageIndex":15},{"imageOffset":3783916,"symbol":"partial apply for closure #1 in static JSONDecoder.withUTF8Representation<A>(of:_:)","symbolLocation":20,"imageIndex":15},{"imageOffset":3636864,"symbol":"closure #1 in Data.withBufferView<A>(_:)","symbolLocation":32,"imageIndex":15},{"imageOffset":3783944,"symbol":"partial apply for closure #1 in Data.withBufferView<A>(_:)","symbolLocation":20,"imageIndex":15},{"imageOffset":3013280,"symbol":"__DataStorage.withUnsafeBytes<A>(in:apply:)","symbolLocation":80,"imageIndex":15},{"imageOffset":3038068,"symbol":"Data._Representation.withUnsafeBytes<A>(_:)","symbolLocation":340,"imageIndex":15},{"imageOffset":3666496,"symbol":"JSONDecoder.decode<A>(_:from:)","symbolLocation":228,"imageIndex":15},{"imageOffset":3785436,"symbol":"dispatch thunk of JSONDecoder.decode<A>(_:from:)","symbolLocation":20,"imageIndex":15},{"imageOffset":5361532,"symbol":"SettingsCache.cacheKey.getter","symbolLocation":320,"imageIndex":1},{"imageOffset":5346164,"symbol":"RemoteSettings.isCacheExpired(time:)","symbolLocation":196,"imageIndex":1},{"imageOffset":5345180,"symbol":"RemoteSettings.fetchAndCacheSettings(currentTime:)","symbolLocation":200,"imageIndex":1},{"imageOffset":5326652,"symbol":"closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:)","symbolLocation":540,"imageIndex":1},{"imageOffset":5339452,"symbol":"partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:)","symbolLocation":24,"imageIndex":1},{"imageOffset":5339152,"symbol":"partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:)","symbolLocation":12,"imageIndex":1},{"imageOffset":5339488,"symbol":"partial apply for closure #1 in closure #1 in Sessions.init(appID:sessionGenerator:coordinator:initiator:appInfo:settings:loggedEventCallback:)","symbolLocation":12,"imageIndex":1},{"imageOffset":5673392,"symbol":"closure #1 in Promise.then(on:_:)","symbolLocation":220,"imageIndex":1},{"imageOffset":5671736,"symbol":"thunk for @escaping @callee_guaranteed (@guaranteed Swift.AnyObject?) -> (@out Any?)","symbolLocation":56,"imageIndex":1},{"imageOffset":5620316,"symbol":"__56-[FBLPromise chainOnQueue:chainedFulfill:chainedReject:]_block_invoke.18","symbolLocation":52,"imageIndex":1},{"imageOffset":6024,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":226224,"symbol":"<deduplicated_symbol>","symbolLocation":60,"imageIndex":10},{"imageOffset":85008,"symbol":"_dispatch_root_queue_drain","symbolLocation":916,"imageIndex":10},{"imageOffset":86964,"symbol":"_dispatch_worker_thread2","symbolLocation":232,"imageIndex":10},{"imageOffset":11152,"symbol":"_pthread_wqthread","symbolLocation":228,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161187,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6092632064},{"value":22023},{"value":6092095488},{"value":6092630912},{"value":5128194},{"value":1},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6092630896},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161188,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6093205504},{"value":32259},{"value":6092668928},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6093205504},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161189,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6093778944},{"value":32003},{"value":6093242368},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6093778944},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161190,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6094352384},{"value":22787},{"value":6093815808},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6094352384},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161191,"name":"com.google.firebase.crashlytics.MachExceptionServer","threadState":{"x":[{"value":268451845},{"value":17179869190},{"value":0},{"value":0},{"value":0},{"value":95670396518400},{"value":92},{"value":0},{"value":0},{"value":17179869184},{"value":92},{"value":0},{"value":0},{"value":0},{"value":22275},{"value":92},{"value":18446744073709551569},{"value":0},{"value":0},{"value":0},{"value":92},{"value":95670396518400},{"value":0},{"value":0},{"value":4500766432},{"value":0},{"value":17179869190},{"value":18446744073709550527},{"value":6}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":4500766048},"sp":{"value":4500765968},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":5173352,"symbol":"FIRCLSMachExceptionServer","symbolLocation":104,"imageIndex":1},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161198,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6094942208},{"value":25095},{"value":6094405632},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6094942208},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161199,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6095515648},{"value":29699},{"value":6094979072},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6095515648},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161201,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6096089088},{"value":28931},{"value":6095552512},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6096089088},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161202,"name":"com.facebook.react.runtime.JavaScript","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":132005819842560},{"value":0},{"value":132005819842560},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":30735},{"value":3072},{"value":18446744073709551569},{"value":4398046512130},{"value":0},{"value":4294967295},{"value":2},{"value":132005819842560},{"value":0},{"value":132005819842560},{"value":6096657864},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6096657712},"sp":{"value":6096657632},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":9847752,"symbol":"+[RCTJSThreadManager runRunLoop]","symbolLocation":212,"imageIndex":1},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161203,"name":"hades","threadState":{"x":[{"value":260},{"value":0},{"value":0},{"value":0},{"value":0},{"value":160},{"value":0},{"value":0},{"value":6097235640},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":0},{"value":0},{"value":105553171844016},{"value":105553171844080},{"value":6097236192},{"value":0},{"value":0},{"value":0},{"value":1},{"value":256},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477119160},"cpsr":{"value":1610616832},"fp":{"value":6097235760},"sp":{"value":6097235616},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477812756},"far":{"value":0}},"frames":[{"imageOffset":16404,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":4},{"imageOffset":27320,"symbol":"_pthread_cond_wait","symbolLocation":976,"imageIndex":5},{"imageOffset":131928,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":28,"imageIndex":19},{"imageOffset":1229472,"symbol":"hermes::vm::HadesGC::Executor::worker()","symbolLocation":104,"imageIndex":2},{"imageOffset":1229332,"symbol":"void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*)","symbolLocation":44,"imageIndex":2},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161291,"name":"AXSpeech","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":174852413587456},{"value":0},{"value":174852413587456},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":40711},{"value":3072},{"value":18446744073709551569},{"value":2},{"value":0},{"value":4294967295},{"value":2},{"value":174852413587456},{"value":0},{"value":174852413587456},{"value":6097804728},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6097804576},"sp":{"value":6097804496},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":7213964,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":208,"imageIndex":15},{"imageOffset":172280,"imageIndex":20},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161293,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6098382848},{"value":37639},{"value":6097846272},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6098382848},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161294,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6098956288},{"value":81411},{"value":6098419712},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6098956288},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161295,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6099529728},{"value":72207},{"value":6098993152},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6099529728},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161337,"name":"caulk.messenger.shared:17","threadState":{"x":[{"value":14},{"value":105553119656826},{"value":0},{"value":6100103274},{"value":105553119656800},{"value":25},{"value":0},{"value":0},{"value":0},{"value":4294967295},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":18446744073709551580},{"value":0},{"value":0},{"value":105553176905168},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":7360289596},"cpsr":{"value":2147487744},"fp":{"value":6100103040},"sp":{"value":6100103008},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799148},"far":{"value":0}},"frames":[{"imageOffset":2796,"symbol":"semaphore_wait_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":64316,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":220,"imageIndex":21},{"imageOffset":93248,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":28,"imageIndex":21},{"imageOffset":93364,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":48,"imageIndex":21},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161338,"name":"caulk.messenger.shared:high","threadState":{"x":[{"value":14},{"value":105553119555836},{"value":0},{"value":6100676716},{"value":105553119555808},{"value":27},{"value":0},{"value":0},{"value":0},{"value":4294967295},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":18446744073709551580},{"value":0},{"value":0},{"value":105553176868496},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":7360289596},"cpsr":{"value":2147487744},"fp":{"value":6100676480},"sp":{"value":6100676448},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799148},"far":{"value":0}},"frames":[{"imageOffset":2796,"symbol":"semaphore_wait_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":64316,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":220,"imageIndex":21},{"imageOffset":93248,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":28,"imageIndex":21},{"imageOffset":93364,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":48,"imageIndex":21},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161346,"name":"hades","threadState":{"x":[{"value":260},{"value":0},{"value":0},{"value":0},{"value":0},{"value":160},{"value":0},{"value":0},{"value":6101249720},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":0},{"value":0},{"value":105553171877488},{"value":105553171877552},{"value":6101250272},{"value":0},{"value":0},{"value":0},{"value":1},{"value":256},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477119160},"cpsr":{"value":1610616832},"fp":{"value":6101249840},"sp":{"value":6101249696},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477812756},"far":{"value":0}},"frames":[{"imageOffset":16404,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":4},{"imageOffset":27320,"symbol":"_pthread_cond_wait","symbolLocation":976,"imageIndex":5},{"imageOffset":131928,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":28,"imageIndex":19},{"imageOffset":1229472,"symbol":"hermes::vm::HadesGC::Executor::worker()","symbolLocation":104,"imageIndex":2},{"imageOffset":1229332,"symbol":"void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*)","symbolLocation":44,"imageIndex":2},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161388,"name":"com.apple.NSURLConnectionLoader","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":355189500411904},{"value":0},{"value":355189500411904},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":82699},{"value":3072},{"value":18446744073709551569},{"value":4398046512130},{"value":0},{"value":4294967295},{"value":2},{"value":355189500411904},{"value":0},{"value":355189500411904},{"value":6101818696},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6101818544},"sp":{"value":6101818464},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":2130160,"symbol":"+[__CFN_CoreSchedulingSetRunnable _run:]","symbolLocation":368,"imageIndex":22},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161420,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6102396928},{"value":72707},{"value":6101860352},{"value":0},{"value":409602},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6102396928},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161421,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6102970368},{"value":81155},{"value":6102433792},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6102970368},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161422,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6103543808},{"value":72963},{"value":6103007232},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6103543808},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161423,"threadState":{"x":[{"value":8368533880,"symbolLocation":0,"symbol":"CFBasicHashCallBackPtrsLock"},{"value":80899},{"value":80899},{"value":80899},{"value":1},{"value":0},{"value":105553142685312},{"value":8},{"value":6104117472},{"value":0},{"value":160},{"value":327680},{"value":105553116269668},{"value":2095104},{"value":2043},{"value":2254641188},{"value":4475078532,"symbolLocation":0,"symbol":"os_unfair_lock_unlock"},{"value":2256736268},{"value":0},{"value":0},{"value":0},{"value":8368533616,"symbolLocation":0,"symbol":"CFBasicHashCallBackPtrs"},{"value":8368533884,"symbolLocation":0,"symbol":"CFBasicHashCallBackPtrsCount"},{"value":0},{"value":0},{"value":105553120623424},{"value":105553178596832},{"value":105553166694608},{"value":105553171941080}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6447673228},"cpsr":{"value":1610616832},"fp":{"value":6104114016},"sp":{"value":6104113984},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4475078544},"far":{"value":0}},"queue":"com.apple.CFNetwork.CacheDB-write","frames":[{"imageOffset":1936,"symbol":"os_unfair_lock_unlock","symbolLocation":12,"imageIndex":3},{"imageOffset":1462156,"symbol":"CFBasicHashGetPtrIndex","symbolLocation":268,"imageIndex":11},{"imageOffset":1461800,"symbol":"CFBasicHashCreate","symbolLocation":512,"imageIndex":11},{"imageOffset":100428,"symbol":"__CFBinaryPlistWriteOrPresize","symbolLocation":116,"imageIndex":11},{"imageOffset":544416,"symbol":"CFPropertyListWrite","symbolLocation":324,"imageIndex":11},{"imageOffset":543908,"symbol":"CFPropertyListCreateData","symbolLocation":208,"imageIndex":11},{"imageOffset":385864,"symbol":"invocation function for block in __CFURLCache::CreateAndStoreCacheNode(__CFURLCacheNode*, _CFCachedURLResponse const*, __CFString const*, _CFURLRequest const*, void const*, bool, bool&)","symbolLocation":1276,"imageIndex":22},{"imageOffset":72140,"symbol":"_dispatch_block_async_invoke2","symbolLocation":104,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":43728,"symbol":"_dispatch_lane_serial_drain","symbolLocation":984,"imageIndex":10},{"imageOffset":46480,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":10},{"imageOffset":91008,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":10},{"imageOffset":88564,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":440,"imageIndex":10},{"imageOffset":11212,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161424,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6104690688},{"value":73475},{"value":6104154112},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6104690688},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161425,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6105264128},{"value":80643},{"value":6104727552},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6105264128},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161426,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6105837568},{"value":80387},{"value":6105300992},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6105837568},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161427,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6106411008},{"value":73731},{"value":6105874432},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6106411008},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161428,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6106984448},{"value":79875},{"value":6106447872},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6106984448},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161429,"threadState":{"x":[{"value":0},{"value":17179869185},{"value":7438884601875},{"value":3587},{"value":1152921504606854147},{"value":0},{"value":1732},{"value":0},{"value":0},{"value":17179869184},{"value":1732},{"value":7171},{"value":268435456},{"value":0},{"value":0},{"value":1732},{"value":18446744073709551569},{"value":2933944406},{"value":0},{"value":0},{"value":1732},{"value":0},{"value":1152921504606854147},{"value":3587},{"value":4860829784},{"value":7438884601875},{"value":17179869185},{"value":18446744073709550527},{"value":1}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":536875008},"fp":{"value":6107546480},"sp":{"value":6107546400},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"queue":"com.apple.CFNetwork.Connection","frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":149344,"symbol":"_xpc_pipe_mach_msg","symbolLocation":52,"imageIndex":23},{"imageOffset":147816,"symbol":"_xpc_send_serializer","symbolLocation":104,"imageIndex":23},{"imageOffset":147248,"symbol":"_xpc_pipe_simpleroutine","symbolLocation":136,"imageIndex":23},{"imageOffset":16664,"symbol":"___os_activity_stream_reflect_block_invoke_3","symbolLocation":36,"imageIndex":18},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":27184,"symbol":"_dispatch_block_invoke_direct","symbolLocation":376,"imageIndex":10},{"imageOffset":26792,"symbol":"dispatch_block_perform","symbolLocation":116,"imageIndex":10},{"imageOffset":15020,"symbol":"_os_activity_stream_reflect","symbolLocation":692,"imageIndex":18},{"imageOffset":74392,"symbol":"_os_log_impl_stream","symbolLocation":536,"imageIndex":18},{"imageOffset":72904,"symbol":"_os_log_impl_flatten_and_send","symbolLocation":8272,"imageIndex":18},{"imageOffset":64608,"symbol":"_os_log","symbolLocation":164,"imageIndex":18},{"imageOffset":75992,"symbol":"_os_log_impl","symbolLocation":20,"imageIndex":18},{"imageOffset":3317896,"symbol":"nw_flow_disconnected(nw_protocol*, nw_protocol*)","symbolLocation":1412,"imageIndex":24},{"imageOffset":2602272,"symbol":"__nw_protocol_instance_report_done_block_invoke","symbolLocation":428,"imageIndex":24},{"imageOffset":9141208,"symbol":"nw_hash_table_apply","symbolLocation":2808,"imageIndex":24},{"imageOffset":2597700,"symbol":"nw_protocol_instance_report_done","symbolLocation":320,"imageIndex":24},{"imageOffset":1705852,"symbol":"quic_conn_drain","symbolLocation":2756,"imageIndex":25},{"imageOffset":1521908,"symbol":"quic_conn_close","symbolLocation":2844,"imageIndex":25},{"imageOffset":1519052,"symbol":"__quic_conn_set_metadata_handlers_block_invoke_2.40","symbolLocation":72,"imageIndex":25},{"imageOffset":9116320,"symbol":"nw_queue_context_async_if_needed","symbolLocation":84,"imageIndex":24},{"imageOffset":2639488,"symbol":"nw_protocol_instance_async_if_needed","symbolLocation":84,"imageIndex":24},{"imageOffset":1518968,"symbol":"__quic_conn_set_metadata_handlers_block_invoke.39","symbolLocation":116,"imageIndex":25},{"imageOffset":8384664,"symbol":"__nw_quic_connection_close_with_error_block_invoke","symbolLocation":48,"imageIndex":24},{"imageOffset":8384000,"symbol":"nw_quic_connection_close_with_error","symbolLocation":120,"imageIndex":24},{"imageOffset":565724,"symbol":"NWIOConnection::closeWithQUICApplicationError(unsigned long long)","symbolLocation":64,"imageIndex":22},{"imageOffset":781884,"symbol":"HTTP3Connection::_cleanupConnection(H3::ErrorCode, bool)","symbolLocation":188,"imageIndex":22},{"imageOffset":6024,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":43728,"symbol":"_dispatch_lane_serial_drain","symbolLocation":984,"imageIndex":10},{"imageOffset":46480,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":10},{"imageOffset":49696,"symbol":"_dispatch_workloop_invoke","symbolLocation":704,"imageIndex":10},{"imageOffset":91008,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":10},{"imageOffset":88564,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":440,"imageIndex":10},{"imageOffset":11212,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161430,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6108131328},{"value":79363},{"value":6107594752},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6108131328},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161431,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6108704768},{"value":74755},{"value":6108168192},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6108704768},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161432,"threadState":{"x":[{"value":268443655},{"value":17179869185},{"value":6803229442067},{"value":3587},{"value":1152921504606854147},{"value":0},{"value":1584},{"value":0},{"value":0},{"value":17179869184},{"value":1584},{"value":7171},{"value":268435456},{"value":0},{"value":0},{"value":1584},{"value":18446744073709551569},{"value":2625710136},{"value":0},{"value":0},{"value":1584},{"value":0},{"value":1152921504606854147},{"value":3587},{"value":4524360792},{"value":6803229442067},{"value":17179869185},{"value":18446744073709550527},{"value":1}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":536875008},"fp":{"value":6109269856},"sp":{"value":6109269776},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"queue":"NSOperationQueue 0x10b204200 (QOS: UNSPECIFIED)","frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":149344,"symbol":"_xpc_pipe_mach_msg","symbolLocation":52,"imageIndex":23},{"imageOffset":147816,"symbol":"_xpc_send_serializer","symbolLocation":104,"imageIndex":23},{"imageOffset":147248,"symbol":"_xpc_pipe_simpleroutine","symbolLocation":136,"imageIndex":23},{"imageOffset":16664,"symbol":"___os_activity_stream_reflect_block_invoke_3","symbolLocation":36,"imageIndex":18},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":27184,"symbol":"_dispatch_block_invoke_direct","symbolLocation":376,"imageIndex":10},{"imageOffset":26792,"symbol":"dispatch_block_perform","symbolLocation":116,"imageIndex":10},{"imageOffset":15020,"symbol":"_os_activity_stream_reflect","symbolLocation":692,"imageIndex":18},{"imageOffset":74392,"symbol":"_os_log_impl_stream","symbolLocation":536,"imageIndex":18},{"imageOffset":72904,"symbol":"_os_log_impl_flatten_and_send","symbolLocation":8272,"imageIndex":18},{"imageOffset":64608,"symbol":"_os_log","symbolLocation":164,"imageIndex":18},{"imageOffset":75992,"symbol":"_os_log_impl","symbolLocation":20,"imageIndex":18},{"imageOffset":9721480,"symbol":"_UIApplicationBeginBackgroundTaskWithExpirationHandler","symbolLocation":336,"imageIndex":13},{"imageOffset":5496196,"symbol":"-[GDTCORApplication beginBackgroundTaskWithName:expirationHandler:]","symbolLocation":96,"imageIndex":1},{"imageOffset":5440544,"symbol":"-[GDTCCTUploadOperation uploadTarget:withConditions:]","symbolLocation":240,"imageIndex":1},{"imageOffset":7004492,"symbol":"__NSOPERATIONQUEUE_IS_STARTING_AN_OPERATION__","symbolLocation":12,"imageIndex":15},{"imageOffset":7003748,"symbol":"__NSOQSchedule_f","symbolLocation":160,"imageIndex":15},{"imageOffset":72140,"symbol":"_dispatch_block_async_invoke2","symbolLocation":104,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":25752,"symbol":"_dispatch_continuation_pop","symbolLocation":776,"imageIndex":10},{"imageOffset":22192,"symbol":"_dispatch_async_redirect_invoke","symbolLocation":852,"imageIndex":10},{"imageOffset":84428,"symbol":"_dispatch_root_queue_drain","symbolLocation":336,"imageIndex":10},{"imageOffset":86964,"symbol":"_dispatch_worker_thread2","symbolLocation":232,"imageIndex":10},{"imageOffset":11152,"symbol":"_pthread_wqthread","symbolLocation":228,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161433,"threadState":{"x":[{"value":268443655},{"value":17179869185},{"value":6116034674707},{"value":3587},{"value":1152921504606854147},{"value":0},{"value":1424},{"value":0},{"value":0},{"value":17179869184},{"value":1424},{"value":7171},{"value":268435456},{"value":0},{"value":0},{"value":1424},{"value":18446744073709551569},{"value":2617325620},{"value":0},{"value":0},{"value":1424},{"value":0},{"value":1152921504606854147},{"value":3587},{"value":4843157592},{"value":6116034674707},{"value":17179869185},{"value":18446744073709550527},{"value":1}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":536875008},"fp":{"value":6109842784},"sp":{"value":6109842704},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"queue":"com.google.GDTCCTUploader","frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":149344,"symbol":"_xpc_pipe_mach_msg","symbolLocation":52,"imageIndex":23},{"imageOffset":147816,"symbol":"_xpc_send_serializer","symbolLocation":104,"imageIndex":23},{"imageOffset":147248,"symbol":"_xpc_pipe_simpleroutine","symbolLocation":136,"imageIndex":23},{"imageOffset":16664,"symbol":"___os_activity_stream_reflect_block_invoke_3","symbolLocation":36,"imageIndex":18},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":27184,"symbol":"_dispatch_block_invoke_direct","symbolLocation":376,"imageIndex":10},{"imageOffset":26792,"symbol":"dispatch_block_perform","symbolLocation":116,"imageIndex":10},{"imageOffset":15020,"symbol":"_os_activity_stream_reflect","symbolLocation":692,"imageIndex":18},{"imageOffset":74392,"symbol":"_os_log_impl_stream","symbolLocation":536,"imageIndex":18},{"imageOffset":72904,"symbol":"_os_log_impl_flatten_and_send","symbolLocation":8272,"imageIndex":18},{"imageOffset":64608,"symbol":"_os_log","symbolLocation":164,"imageIndex":18},{"imageOffset":75992,"symbol":"_os_log_impl","symbolLocation":20,"imageIndex":18},{"imageOffset":9721944,"symbol":"_UIApplicationEndBackgroundTask","symbolLocation":152,"imageIndex":13},{"imageOffset":15195848,"symbol":"-[UIApplication _endBackgroundTask:]","symbolLocation":24,"imageIndex":13},{"imageOffset":5496368,"symbol":"-[GDTCORApplication endBackgroundTask:]","symbolLocation":116,"imageIndex":1},{"imageOffset":5442176,"symbol":"__53-[GDTCCTUploadOperation uploadTarget:withConditions:]_block_invoke","symbolLocation":92,"imageIndex":1},{"imageOffset":5622832,"symbol":"__46-[FBLPromise(AlwaysAdditions) onQueue:always:]_block_invoke.1","symbolLocation":40,"imageIndex":1},{"imageOffset":5620428,"symbol":"__56-[FBLPromise chainOnQueue:chainedFulfill:chainedReject:]_block_invoke.19","symbolLocation":52,"imageIndex":1},{"imageOffset":6024,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":43936,"symbol":"_dispatch_lane_serial_drain","symbolLocation":1192,"imageIndex":10},{"imageOffset":46480,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":10},{"imageOffset":91008,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":10},{"imageOffset":88564,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":440,"imageIndex":10},{"imageOffset":11212,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161434,"threadState":{"x":[{"value":0},{"value":0},{"value":6491762204,"symbolLocation":0,"symbol":"unixSync"},{"value":69632},{"value":0},{"value":17},{"value":250},{"value":35},{"value":0},{"value":51},{"value":6491770548,"symbolLocation":5948,"symbol":"unixFileControl"},{"value":1454},{"value":105553141653120},{"value":0},{"value":4566372352},{"value":18},{"value":95},{"value":4566369352},{"value":0},{"value":10},{"value":4505264568},{"value":0},{"value":0},{"value":0},{"value":4},{"value":52},{"value":105553169760736},{"value":4638537008},{"value":4638217856}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6491762408},"cpsr":{"value":1073745920},"fp":{"value":6110421568},"sp":{"value":6110421392},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477813428},"far":{"value":0}},"queue":"com.google.fira.worker","frames":[{"imageOffset":17076,"symbol":"fsync","symbolLocation":8,"imageIndex":4},{"imageOffset":220904,"symbol":"unixSync","symbolLocation":204,"imageIndex":26},{"imageOffset":67072,"symbol":"sqlite3PagerCommitPhaseOne","symbolLocation":664,"imageIndex":26},{"imageOffset":67876,"symbol":"sqlite3BtreeCommitPhaseOne","symbolLocation":156,"imageIndex":26},{"imageOffset":338848,"symbol":"vdbeCommit","symbolLocation":1128,"imageIndex":26},{"imageOffset":336164,"symbol":"sqlite3VdbeHalt","symbolLocation":1344,"imageIndex":26},{"imageOffset":401876,"symbol":"sqlite3VdbeExec","symbolLocation":42308,"imageIndex":26},{"imageOffset":56756,"symbol":"sqlite3_step","symbolLocation":936,"imageIndex":26},{"imageOffset":27397156,"symbol":"-[APMSqliteStore deleteRecordsFromTableWithName:condition:parameterValues:error:]","symbolLocation":244,"imageIndex":1},{"imageOffset":26840960,"symbol":"-[APMDatabase deleteBundlesWithRowIDs:error:]","symbolLocation":100,"imageIndex":1},{"imageOffset":27033116,"symbol":"-[APMMeasurement removeBundlesFromDatabaseWithIDs:]","symbolLocation":36,"imageIndex":1},{"imageOffset":27009720,"symbol":"-[APMMeasurement networkUploadCompletionHandlerWithResponse:error:]","symbolLocation":404,"imageIndex":1},{"imageOffset":27008372,"symbol":"__28-[APMMeasurement uploadData]_block_invoke.689","symbolLocation":84,"imageIndex":1},{"imageOffset":6024,"symbol":"_dispatch_call_block_and_release","symbolLocation":24,"imageIndex":10},{"imageOffset":115320,"symbol":"_dispatch_client_callout","symbolLocation":12,"imageIndex":10},{"imageOffset":43728,"symbol":"_dispatch_lane_serial_drain","symbolLocation":984,"imageIndex":10},{"imageOffset":46480,"symbol":"_dispatch_lane_invoke","symbolLocation":396,"imageIndex":10},{"imageOffset":91008,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":288,"imageIndex":10},{"imageOffset":88564,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":440,"imageIndex":10},{"imageOffset":11212,"symbol":"_pthread_wqthread","symbolLocation":288,"imageIndex":5},{"imageOffset":6540,"symbol":"start_wqthread","symbolLocation":8,"imageIndex":5}]},{"id":15161435,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6110998528},{"value":75523},{"value":6110461952},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6110998528},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161436,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6111571968},{"value":75779},{"value":6111035392},{"value":0},{"value":409604},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6111571968},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161437,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6112145408},{"value":81947},{"value":6111608832},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6112145408},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161439,"frames":[{"imageOffset":6532,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":5}],"threadState":{"x":[{"value":6112718848},{"value":81679},{"value":6112182272},{"value":0},{"value":409603},{"value":18446744073709551615},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":0},"cpsr":{"value":4096},"fp":{"value":0},"sp":{"value":6112718848},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477098372},"far":{"value":0}}},{"id":15161457,"name":"com.facebook.react.runtime.JavaScript","threadState":{"x":[{"value":18446744073709551612},{"value":0},{"value":4294967295},{"value":0},{"value":8368319168,"symbolLocation":0,"symbol":"_dispatch_main_q"},{"value":18},{"value":0},{"value":0},{"value":0},{"value":6},{"value":105553141790534},{"value":105553141790544},{"value":8368319272,"symbolLocation":104,"symbol":"_dispatch_main_q"},{"value":8368319216,"symbolLocation":48,"symbol":"_dispatch_main_q"},{"value":9005068950962176},{"value":8368326008,"symbolLocation":0,"symbol":"_NSConcreteMallocBlock"},{"value":515},{"value":6443481908,"symbolLocation":0,"symbol":"-[__NSMallocBlock__ retain]"},{"value":0},{"value":4294967295},{"value":1},{"value":0},{"value":6113283088},{"value":8368319168,"symbolLocation":0,"symbol":"_dispatch_main_q"},{"value":18},{"value":4424412608,"symbolLocation":0,"symbol":"OBJC_CLASS_$_RCTAppearance"},{"value":6113283328},{"value":4493101592,"symbolLocation":0,"symbol":"hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&)::opcodeDispatch"},{"value":6113285184}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6444017040},"cpsr":{"value":1073745920},"fp":{"value":6113282896},"sp":{"value":6113282864},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477806448},"far":{"value":0}},"frames":[{"imageOffset":10096,"symbol":"__ulock_wait","symbolLocation":8,"imageIndex":4},{"imageOffset":13712,"symbol":"_dlock_wait","symbolLocation":52,"imageIndex":10},{"imageOffset":13212,"symbol":"_dispatch_thread_event_wait_slow","symbolLocation":52,"imageIndex":10},{"imageOffset":74272,"symbol":"__DISPATCH_WAIT_FOR_QUEUE__","symbolLocation":392,"imageIndex":10},{"imageOffset":72988,"symbol":"_dispatch_sync_f_slow","symbolLocation":160,"imageIndex":10},{"imageOffset":8148128,"symbol":"RCTUnsafeExecuteOnMainQueueSyncWithError","symbolLocation":284,"imageIndex":1},{"imageOffset":9116168,"symbol":"-[RCTTurboModuleManager _provideObjCModule:moduleHolder:shouldPerfLog:moduleProvider:]","symbolLocation":492,"imageIndex":1},{"imageOffset":9115532,"symbol":"-[RCTTurboModuleManager _provideObjCModule:moduleProvider:]","symbolLocation":228,"imageIndex":1},{"imageOffset":9113944,"symbol":"-[RCTTurboModuleManager _moduleProviderForName:]","symbolLocation":216,"imageIndex":1},{"imageOffset":9110512,"symbol":"-[RCTTurboModuleManager provideTurboModule:runtime:]","symbolLocation":824,"imageIndex":1},{"imageOffset":9126176,"symbol":"std::__1::__function::__func<-[RCTTurboModuleManager installJSBindings:]::$_0, std::__1::allocator<-[RCTTurboModuleManager installJSBindings:]::$_0>, std::__1::shared_ptr<facebook::react::TurboModule> (std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&)>::operator()(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&)","symbolLocation":152,"imageIndex":1},{"imageOffset":10608672,"symbol":"facebook::react::TurboModuleBinding::getModule(facebook::jsi::Runtime&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&) const","symbolLocation":116,"imageIndex":1},{"imageOffset":10611156,"symbol":"facebook::react::BridgelessNativeModuleProxy::get(facebook::jsi::Runtime&, facebook::jsi::PropNameID const&)","symbolLocation":156,"imageIndex":1},{"imageOffset":73680,"symbol":"facebook::hermes::(anonymous namespace)::HermesRuntimeImpl::JsiProxy::get(hermes::vm::SymbolID)","symbolLocation":96,"imageIndex":2},{"imageOffset":2226224,"symbol":"hermes::vm::JSObject::getComputedWithReceiver_RJS(hermes::vm::Handle<hermes::vm::JSObject>, hermes::vm::Runtime&, hermes::vm::Handle<hermes::vm::HermesValue>, hermes::vm::Handle<hermes::vm::HermesValue>)","symbolLocation":428,"imageIndex":2},{"imageOffset":722944,"symbol":"hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&)","symbolLocation":3796,"imageIndex":2},{"imageOffset":719108,"symbol":"hermes::vm::Runtime::interpretFunctionImpl(hermes::vm::CodeBlock*)","symbolLocation":132,"imageIndex":2},{"imageOffset":636688,"symbol":"hermes::vm::JSFunction::_callImpl(hermes::vm::Handle<hermes::vm::Callable>, hermes::vm::Runtime&)","symbolLocation":40,"imageIndex":2},{"imageOffset":635412,"symbol":"hermes::vm::BoundFunction::_boundCall(hermes::vm::BoundFunction*, hermes::inst::Inst const*, hermes::vm::Runtime&)","symbolLocation":340,"imageIndex":2},{"imageOffset":715756,"symbol":"hermes::vm::Interpreter::handleCallSlowPath(hermes::vm::Runtime&, hermes::vm::PinnedHermesValue*)","symbolLocation":88,"imageIndex":2},{"imageOffset":728320,"symbol":"hermes::vm::CallResult<hermes::vm::HermesValue, (hermes::vm::detail::CallResultSpecialize)2> hermes::vm::Interpreter::interpretFunction<false, false>(hermes::vm::Runtime&, hermes::vm::InterpreterState&)","symbolLocation":9172,"imageIndex":2},{"imageOffset":719108,"symbol":"hermes::vm::Runtime::interpretFunctionImpl(hermes::vm::CodeBlock*)","symbolLocation":132,"imageIndex":2},{"imageOffset":636688,"symbol":"hermes::vm::JSFunction::_callImpl(hermes::vm::Handle<hermes::vm::Callable>, hermes::vm::Runtime&)","symbolLocation":40,"imageIndex":2},{"imageOffset":635412,"symbol":"hermes::vm::BoundFunction::_boundCall(hermes::vm::BoundFunction*, hermes::inst::Inst const*, hermes::vm::Runtime&)","symbolLocation":340,"imageIndex":2},{"imageOffset":45744,"symbol":"facebook::hermes::(anonymous namespace)::HermesRuntimeImpl::call(facebook::jsi::Function const&, facebook::jsi::Value const&, facebook::jsi::Value const*, unsigned long)","symbolLocation":292,"imageIndex":2},{"imageOffset":10330472,"symbol":"facebook::react::Task::execute(facebook::jsi::Runtime&, bool)","symbolLocation":172,"imageIndex":1},{"imageOffset":10313208,"symbol":"facebook::react::RuntimeScheduler_Modern::executeTask(facebook::jsi::Runtime&, facebook::react::Task&, bool) const","symbolLocation":132,"imageIndex":1},{"imageOffset":10315124,"symbol":"facebook::react::RuntimeScheduler_Modern::runEventLoopTick(facebook::jsi::Runtime&, facebook::react::Task&)","symbolLocation":176,"imageIndex":1},{"imageOffset":10314456,"symbol":"facebook::react::RuntimeScheduler_Modern::runEventLoop(facebook::jsi::Runtime&)","symbolLocation":120,"imageIndex":1},{"imageOffset":9864944,"symbol":"_ZNSt3__110__function6__funcIZZN8facebook5react13ReactInstanceC1ENS_10unique_ptrINS3_9JSRuntimeENS_14default_deleteIS6_EEEENS_10shared_ptrINS3_18MessageQueueThreadEEENSA_INS3_12TimerManagerEEENS_8functionIFvRNS2_3jsi7RuntimeERKNS3_14JsErrorHandler14ProcessedErrorEEEEPNS3_18jsinspector_modern10HostTargetEENK3$_0clINSF_IFvSI_EEEEEDaT_EUlvE_NS_9allocatorISY_EEFvvEEclEv","symbolLocation":140,"imageIndex":1},{"imageOffset":7900744,"symbol":"facebook::react::tryAndReturnError(std::__1::function<void ()> const&)","symbolLocation":32,"imageIndex":1},{"imageOffset":7961904,"symbol":"facebook::react::RCTMessageThread::tryFunc(std::__1::function<void ()> const&)","symbolLocation":24,"imageIndex":1},{"imageOffset":7961404,"symbol":"invocation function for block in facebook::react::RCTMessageThread::runAsync(std::__1::function<void ()>)","symbolLocation":44,"imageIndex":1},{"imageOffset":602420,"symbol":"__CFRUNLOOP_IS_CALLING_OUT_TO_A_BLOCK__","symbolLocation":20,"imageIndex":11},{"imageOffset":600216,"symbol":"__CFRunLoopDoBlocks","symbolLocation":348,"imageIndex":11},{"imageOffset":580140,"symbol":"__CFRunLoopRun","symbolLocation":2308,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":9847752,"symbol":"+[RCTJSThreadManager runRunLoop]","symbolLocation":212,"imageIndex":1},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161458,"name":"hades","threadState":{"x":[{"value":260},{"value":0},{"value":0},{"value":0},{"value":0},{"value":160},{"value":0},{"value":0},{"value":6113865400},{"value":0},{"value":0},{"value":2},{"value":2},{"value":0},{"value":0},{"value":0},{"value":305},{"value":0},{"value":0},{"value":105553171995520},{"value":105553171995584},{"value":6113865952},{"value":0},{"value":0},{"value":0},{"value":1},{"value":256},{"value":0},{"value":0}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477119160},"cpsr":{"value":1610616832},"fp":{"value":6113865520},"sp":{"value":6113865376},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477812756},"far":{"value":0}},"frames":[{"imageOffset":16404,"symbol":"__psynch_cvwait","symbolLocation":8,"imageIndex":4},{"imageOffset":27320,"symbol":"_pthread_cond_wait","symbolLocation":976,"imageIndex":5},{"imageOffset":131928,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":28,"imageIndex":19},{"imageOffset":1229472,"symbol":"hermes::vm::HadesGC::Executor::worker()","symbolLocation":104,"imageIndex":2},{"imageOffset":1229332,"symbol":"void* std::__1::__thread_proxy[abi:nn200100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*)","symbolLocation":44,"imageIndex":2},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161465,"name":"com.facebook.SocketRocket.NetworkThread","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":540972605767680},{"value":0},{"value":540972605767680},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":125955},{"value":3072},{"value":18446744073709551569},{"value":3298534884098},{"value":0},{"value":4294967295},{"value":2},{"value":540972605767680},{"value":0},{"value":540972605767680},{"value":6114434408},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6114434256},"sp":{"value":6114434176},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":7213964,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":208,"imageIndex":15},{"imageOffset":10849296,"symbol":"-[SRRunLoopThread main]","symbolLocation":224,"imageIndex":1},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161466,"name":"com.apple.CFStream.LegacyThread","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":401334629040128},{"value":0},{"value":401334629040128},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":93443},{"value":3072},{"value":18446744073709551569},{"value":9895604652290},{"value":0},{"value":4294967295},{"value":2},{"value":401334629040128},{"value":0},{"value":401334629040128},{"value":6115008520},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6115008368},"sp":{"value":6115008288},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":724956,"symbol":"_legacyStreamRunLoop_workThread","symbolLocation":260,"imageIndex":11},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161467,"name":"com.apple.CFSocket.private","threadState":{"x":[{"value":4},{"value":0},{"value":105553116616912},{"value":0},{"value":0},{"value":0},{"value":399700393984},{"value":0},{"value":6115586272},{"value":0},{"value":4795611744},{"value":31},{"value":21},{"value":4795612064},{"value":72057602406436409,"symbolLocation":72057594037927937,"symbol":"OBJC_CLASS_$___NSCFArray"},{"value":8368508472,"symbolLocation":0,"symbol":"OBJC_CLASS_$___NSCFArray"},{"value":93},{"value":6446721588,"symbolLocation":0,"symbol":"-[__NSCFArray objectAtIndex:]"},{"value":0},{"value":8368530872,"symbolLocation":0,"symbol":"__CFActiveSocketsLock"},{"value":64},{"value":8153954552,"symbolLocation":0,"symbol":"__kCFNull"},{"value":0},{"value":0},{"value":105553116616912},{"value":6115585628},{"value":105553116618320},{"value":6115585628},{"value":105553131079504}],"flavor":"ARM_THREAD_STATE64","lr":{"value":6446872484},"cpsr":{"value":1610616832},"fp":{"value":6115585984},"sp":{"value":6115552208},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477841304},"far":{"value":0}},"frames":[{"imageOffset":44952,"symbol":"__select","symbolLocation":8,"imageIndex":4},{"imageOffset":661412,"symbol":"__CFSocketManager","symbolLocation":680,"imageIndex":11},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]},{"id":15161633,"name":"AXSpeech","threadState":{"x":[{"value":268451845},{"value":21592279046},{"value":8589934592},{"value":409065570172928},{"value":0},{"value":409065570172928},{"value":2},{"value":4294967295},{"value":0},{"value":17179869184},{"value":0},{"value":2},{"value":0},{"value":0},{"value":95243},{"value":3072},{"value":18446744073709551569},{"value":2},{"value":0},{"value":4294967295},{"value":2},{"value":409065570172928},{"value":0},{"value":409065570172928},{"value":6116154808},{"value":8589934592},{"value":21592279046},{"value":18446744073709550527},{"value":4412409862,"symbolLocation":102,"symbol":"_OBJC_$_INSTANCE_METHODS_RNSVGFeOffset"}],"flavor":"ARM_THREAD_STATE64","lr":{"value":4477869996},"cpsr":{"value":4096},"fp":{"value":6116154656},"sp":{"value":6116154576},"esr":{"value":1442840704,"description":" Address size fault"},"pc":{"value":4477799280},"far":{"value":0}},"frames":[{"imageOffset":2928,"symbol":"mach_msg2_trap","symbolLocation":8,"imageIndex":4},{"imageOffset":73644,"symbol":"mach_msg2_internal","symbolLocation":72,"imageIndex":4},{"imageOffset":35880,"symbol":"mach_msg_overwrite","symbolLocation":480,"imageIndex":4},{"imageOffset":3800,"symbol":"mach_msg","symbolLocation":20,"imageIndex":4},{"imageOffset":601028,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":156,"imageIndex":11},{"imageOffset":578980,"symbol":"__CFRunLoopRun","symbolLocation":1148,"imageIndex":11},{"imageOffset":576748,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":11},{"imageOffset":7213964,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":208,"imageIndex":15},{"imageOffset":172280,"imageIndex":20},{"imageOffset":7373128,"symbol":"__NSThread__start__","symbolLocation":716,"imageIndex":15},{"imageOffset":26096,"symbol":"_pthread_start","symbolLocation":104,"imageIndex":5},{"imageOffset":6552,"symbol":"thread_start","symbolLocation":8,"imageIndex":5}]}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "arm64e",
    "base" : 4475207680,
    "size" : 638976,
    "uuid" : "3247e185-ced2-36ff-9e29-47a77c23e004",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4378820608,
    "CFBundleShortVersionString" : "54.0.6",
    "CFBundleIdentifier" : "host.exp.Exponent",
    "size" : 41549824,
    "uuid" : "feca2dde-f779-3952-b492-3020fe2747fc",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/29237E46-92B3-413F-94A4-ABCAEF3628D6\/data\/Containers\/Bundle\/Application\/145D204B-85A1-494A-ABED-2BBA7856D5E4\/Expo-Go-54.0.6.tar.app\/Expo Go",
    "name" : "Expo Go",
    "CFBundleVersion" : "54.0.6"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4490330112,
    "CFBundleShortVersionString" : "0.12.0",
    "CFBundleIdentifier" : "dev.hermesengine.iphonesimulator",
    "size" : 2703360,
    "uuid" : "a918e708-284a-3dc7-8b99-c31ee9bab970",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/29237E46-92B3-413F-94A4-ABCAEF3628D6\/data\/Containers\/Bundle\/Application\/145D204B-85A1-494A-ABED-2BBA7856D5E4\/Expo-Go-54.0.6.tar.app\/Frameworks\/hermes.framework\/hermes",
    "name" : "hermes",
    "CFBundleVersion" : "0.12.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4475076608,
    "size" : 32768,
    "uuid" : "43ef9892-7edb-34c5-88d6-2c79fa2e7bd3",
    "path" : "\/usr\/lib\/system\/libsystem_platform.dylib",
    "name" : "libsystem_platform.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4477796352,
    "size" : 245760,
    "uuid" : "0960cf7e-fb2e-3068-998e-131a316ed666",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4477091840,
    "size" : 65536,
    "uuid" : "421e2342-6729-3a9f-a439-29ad130875b3",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 4479598592,
    "size" : 49152,
    "uuid" : "56878cbd-4b61-3d67-a830-23a1b2beaf59",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc-trampolines.dylib",
    "name" : "libobjc-trampolines.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443491328,
    "size" : 509852,
    "uuid" : "d8eab09a-74cb-346d-b14e-3187db1c40db",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6445182976,
    "size" : 114688,
    "uuid" : "649076f2-9c2b-3e8e-833b-d246ac43869e",
    "path" : "\/Volumes\/VOLUME\/*\/libc++abi.dylib",
    "name" : "libc++abi.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6442876928,
    "size" : 248096,
    "uuid" : "b10e226d-4fab-3450-9a4c-071d3d0edf3a",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc.A.dylib",
    "name" : "libobjc.A.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6444003328,
    "size" : 281504,
    "uuid" : "990151a6-fd18-3496-84e3-f565307fbc2f",
    "path" : "\/Volumes\/VOLUME\/*\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6446211072,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 4292608,
    "uuid" : "ae27f481-c1fa-359c-b04c-af9cda7655ff",
    "path" : "\/Volumes\/VOLUME\/*\/CoreFoundation.framework\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "3502"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6727671808,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.GraphicsServices",
    "size" : 33280,
    "uuid" : "80b30bb2-e6e1-317e-b798-ea590de713a8",
    "path" : "\/Volumes\/VOLUME\/*\/GraphicsServices.framework\/GraphicsServices",
    "name" : "GraphicsServices",
    "CFBundleVersion" : "1.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6524219392,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.UIKitCore",
    "size" : 30851776,
    "uuid" : "f5406608-aa34-30ba-8494-0a8b531792f5",
    "path" : "\/Volumes\/VOLUME\/*\/UIKitCore.framework\/UIKitCore",
    "name" : "UIKitCore",
    "CFBundleVersion" : "8506.1.101"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6451023872,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 12254784,
    "uuid" : "48eb0271-c8d1-359a-bd56-bcf3e7e37dc5",
    "path" : "\/Volumes\/VOLUME\/*\/Foundation.framework\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "3502"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6802878464,
    "size" : 4731872,
    "uuid" : "0c2ad407-9c4e-364d-b9a4-fc4560142a64",
    "path" : "\/Volumes\/VOLUME\/*\/libswiftCore.dylib",
    "name" : "libswiftCore.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 9720561664,
    "CFBundleShortVersionString" : "16.0",
    "CFBundleIdentifier" : "com.apple.vfx",
    "size" : 13372832,
    "uuid" : "89c56423-fb99-302a-9014-11dc4e61ace9",
    "path" : "\/Volumes\/VOLUME\/*\/VFX.framework\/VFX",
    "name" : "VFX",
    "CFBundleVersion" : "184.120.1"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443126784,
    "size" : 102944,
    "uuid" : "ca18d463-4b64-30c3-a144-c6b4dad25e15",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_trace.dylib",
    "name" : "libsystem_trace.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6445514752,
    "size" : 544764,
    "uuid" : "b81f25b5-2a12-36cd-84e2-b8c80df7d07b",
    "path" : "\/Volumes\/VOLUME\/*\/libc++.1.dylib",
    "name" : "libc++.1.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 7361056768,
    "CFBundleShortVersionString" : "1.0.0",
    "CFBundleIdentifier" : "com.apple.texttospeech",
    "size" : 1925088,
    "uuid" : "a1620dc8-7943-3238-9daa-dc6d73391990",
    "path" : "\/Volumes\/VOLUME\/*\/TextToSpeech.framework\/TextToSpeech",
    "name" : "TextToSpeech",
    "CFBundleVersion" : "1.0"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 7360225280,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.audio.caulk",
    "size" : 153056,
    "uuid" : "7f22c3c4-1a93-34dd-bf46-522f8d2a0e77",
    "path" : "\/Volumes\/VOLUME\/*\/caulk.framework\/caulk",
    "name" : "caulk"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6519136256,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.CFNetwork",
    "size" : 3676576,
    "uuid" : "a726149c-9657-391f-bfdd-fd9ed415d3cc",
    "path" : "\/Volumes\/VOLUME\/*\/CFNetwork.framework\/CFNetwork",
    "name" : "CFNetwork",
    "CFBundleVersion" : "3826.500.131"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443233280,
    "size" : 244384,
    "uuid" : "021c0bf8-edd4-395a-b281-2cc7a26f742f",
    "path" : "\/Volumes\/VOLUME\/*\/libxpc.dylib",
    "name" : "libxpc.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6573760512,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.Network",
    "size" : 15217088,
    "uuid" : "c8ee496f-c2b0-3b8d-83a7-85ac5926ac2f",
    "path" : "\/Volumes\/VOLUME\/*\/Network.framework\/Network",
    "name" : "Network",
    "CFBundleVersion" : "4277.122.6"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 9824489472,
    "size" : 2111168,
    "uuid" : "22384c0e-af0d-34d4-b379-20bd79829b59",
    "path" : "\/Volumes\/VOLUME\/*\/libquic.dylib",
    "name" : "libquic.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6491541504,
    "size" : 1552096,
    "uuid" : "980ccbb2-c062-3209-9abe-a316f748abd0",
    "path" : "\/Volumes\/VOLUME\/*\/libsqlite3.dylib",
    "name" : "libsqlite3.dylib"
  },
  {
    "source" : "P",
    "arch" : "arm64",
    "base" : 6443479040,
    "size" : 11689,
    "uuid" : "c4bd1236-39b0-3bae-9cab-5a79157d4a8f",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_blocks.dylib",
    "name" : "libsystem_blocks.dylib"
  }
],
  "sharedCache" : {
  "base" : 6442450944,
  "size" : 3915153408,
  "uuid" : "e30d3ed9-ce92-34f8-849c-19e75683ac1c"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.8G resident=0K(0%) swapped_out_or_unallocated=1.8G(100%)\nWritable regions: Total=762.7M written=2072K(0%) resident=2008K(0%) swapped_out=64K(0%) unallocated=760.7M(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nCG raster data                    4432K        8 \nColorSync                          144K        6 \nCoreAnimation                      896K       38 \nFoundation                        6688K        2 \nKernel Alloc Once                   32K        1 \nMALLOC                           677.3M      128 \nMALLOC guard page                  192K       12 \nMach message                        32K        1 \nSQLite page cache                 1152K        9 \nSTACK GUARD                       56.8M       50 \nStack                             34.0M       51 \nVM_ALLOCATE                       39.9M       43 \n__DATA                            46.3M      898 \n__DATA_CONST                     113.9M      922 \n__DATA_DIRTY                        91K       11 \n__FONT_DATA                        2352        1 \n__LINKEDIT                       735.9M        8 \n__OBJC_RO                         61.3M        1 \n__OBJC_RW                         2727K        1 \n__TEXT                             1.1G      939 \n__TPRO_CONST                       148K        2 \ndyld private memory                2.5G       17 \nlibnetwork                         128K        8 \nmapped file                      190.2M       47 \npage table in kernel              2008K        1 \nshared memory                       16K        1 \n===========                     =======  ======= \nTOTAL                              5.5G     3207 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "ba6874832c7b7ea7f9e1ea8443e88421449e9763",
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "60186475825c62000ccf5450",
      "factorPackIds" : {

      },
      "deploymentId" : 240000083
    },
    {
      "rolloutId" : "63f9578e238e7b23a1f3030a",
      "factorPackIds" : {

      },
      "deploymentId" : 240000005
    }
  ],
  "experiments" : [

  ]
}
}

Model: Mac14,2, BootROM 11881.140.96, proc 8:4:4 processors, 16 GB, SMC 
Graphics: Apple M2, Apple M2, Built-In
Display: Color LCD, 2560 x 1664 Retina, Main, MirrorOff, Online
Memory Module: LPDDR5, Hynix
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x4387), wl0: Mar 23 2025 19:56:28 version 20.130.17.0.8.7.197 FWID 01-764e34b7
IO80211_driverkit-1485.7 "IO80211_driverkit-1485.7" Jul 15 2025 20:46:41
AirPort: 
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB31Bus
USB Device: USB31Bus
Thunderbolt Bus: MacBook Air, Apple Inc.
Thunderbolt Bus: MacBook Air, Apple Inc.